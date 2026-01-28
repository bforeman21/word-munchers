import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import HUD from './components/HUD';
import { rules } from './data/rules';

function App() {
  // Game state
  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [currentRule, setCurrentRule] = useState(null);
  const [gameState, setGameState] = useState('START'); // START, PLAYING, LEVEL_COMPLETE, GAME_OVER
  const [playerPosition, setPlayerPosition] = useState({ row: 2, col: 2 });
  const [monsters, setMonsters] = useState([]);
  const [gridCells, setGridCells] = useState([]);
  const [clearedCells, setClearedCells] = useState([]);
  const [gameStartTime, setGameStartTime] = useState(null);

  // Game configuration
  const GRID_ROWS = 5;
  const GRID_COLS = 6;
  const MONSTER_SPAWN_DELAY = 10000; // 10 seconds in milliseconds

  // Initialize a new level
  const initializeLevel = useCallback(() => {
    // Select a random rule for this level
    const randomRule = rules[Math.floor(Math.random() * rules.length)];
    setCurrentRule(randomRule);

    // Generate grid with mix of correct and incorrect answers
    const cells = [];
    const numCorrect = 8 + Math.floor(level / 3); // More correct answers as level increases
    const numIncorrect = (GRID_ROWS * GRID_COLS) - numCorrect;

    // Add correct answers
    for (let i = 0; i < numCorrect; i++) {
      const randomCorrect = randomRule.correctAnswers[
        Math.floor(Math.random() * randomRule.correctAnswers.length)
      ];
      cells.push({ word: randomCorrect, isCorrect: true });
    }

    // Add incorrect answers
    for (let i = 0; i < numIncorrect; i++) {
      const randomIncorrect = randomRule.incorrectAnswers[
        Math.floor(Math.random() * randomRule.incorrectAnswers.length)
      ];
      cells.push({ word: randomIncorrect, isCorrect: false });
    }

    // Shuffle the cells
    const shuffledCells = cells.sort(() => Math.random() - 0.5);
    
    setGridCells(shuffledCells);
    setClearedCells([]);
    setPlayerPosition({ row: 2, col: 2 }); // Center of grid
    setMonsters([]);
    setGameStartTime(Date.now());
  }, [level]);

  // Start the game
  const startGame = () => {
    setGameState('PLAYING');
    setScore(0);
    setLives(3);
    setLevel(1);
    initializeLevel();
  };

  // Spawn monsters after delay
  useEffect(() => {
    if (gameState !== 'PLAYING' || !gameStartTime) return;

    const timer = setTimeout(() => {
      // Spawn 1-2 monsters based on level
      const numMonsters = level > 10 ? 2 : 1;
      const newMonsters = [];

      for (let i = 0; i < numMonsters; i++) {
        // Spawn at random edge position
        const edge = Math.floor(Math.random() * 4); // 0=top, 1=right, 2=bottom, 3=left
        let row, col;

        switch (edge) {
          case 0: // top
            row = 0;
            col = Math.floor(Math.random() * GRID_COLS);
            break;
          case 1: // right
            row = Math.floor(Math.random() * GRID_ROWS);
            col = GRID_COLS - 1;
            break;
          case 2: // bottom
            row = GRID_ROWS - 1;
            col = Math.floor(Math.random() * GRID_COLS);
            break;
          default: // left
            row = Math.floor(Math.random() * GRID_ROWS);
            col = 0;
        }

        newMonsters.push({ id: i, row, col });
      }

      setMonsters(newMonsters);
    }, MONSTER_SPAWN_DELAY);

    return () => clearTimeout(timer);
  }, [gameState, gameStartTime, level, GRID_COLS, GRID_ROWS]);

  // Handle eating a cell
  const eatCell = () => {
    const cellIndex = playerPosition.row * GRID_COLS + playerPosition.col;
    
    // Check if cell is already cleared
    if (clearedCells.includes(cellIndex)) {
      return;
    }

    const cell = gridCells[cellIndex];

    if (cell.isCorrect) {
      // Correct answer!
      setScore(prevScore => prevScore + 10);
      setClearedCells(prev => [...prev, cellIndex]);

      // Check if level is complete (all correct answers eaten)
      const totalCorrect = gridCells.filter(c => c.isCorrect).length;
      const clearedCorrect = clearedCells.filter(i => gridCells[i].isCorrect).length + 1;

      if (clearedCorrect >= totalCorrect) {
        // Level complete!
        setGameState('LEVEL_COMPLETE');
        setTimeout(() => {
          setLevel(prev => prev + 1);
          setGameState('PLAYING');
          initializeLevel();
        }, 2000); // 2 seconds display time
      }
    } else {
      // Wrong answer!
      setScore(prevScore => Math.max(0, prevScore - 10));
      setLives(prevLives => prevLives - 1);
      
      if (lives - 1 <= 0) {
        setGameState('GAME_OVER');
      }
    }
  };

  // Check collision with monsters
  useEffect(() => {
    if (gameState !== 'PLAYING') return;

    const collision = monsters.some(
      monster => monster.row === playerPosition.row && monster.col === playerPosition.col
    );

    if (collision) {
      setLives(prevLives => prevLives - 1);
      setScore(prevScore => Math.max(0, prevScore - 5));
      
      if (lives - 1 <= 0) {
        setGameState('GAME_OVER');
      } else {
        // Respawn player at center
        setPlayerPosition({ row: 2, col: 2 });
      }
    }
  }, [playerPosition, monsters, gameState, lives]);

  return (
    <div className="App">
      <div className="game-container">
        {gameState === 'START' && (
          <div className="menu-screen">
            <h1>Word Munchers</h1>
            <p>Learn Spelling, Grammar & Spanish!</p>
            <button onClick={startGame} className="start-button">
              Start Game
            </button>
            <div className="instructions">
              <h3>How to Play:</h3>
              <p>Use arrow keys to move</p>
              <p>Press SPACE to eat a word</p>
              <p>Eat only the correct answers!</p>
              <p>Avoid the monsters!</p>
            </div>
          </div>
        )}

        {gameState === 'PLAYING' && (
          <>
            <HUD 
              level={level}
              score={score}
              lives={lives}
              rule={currentRule?.rule || ''}
            />
            <GameBoard
              rows={GRID_ROWS}
              cols={GRID_COLS}
              gridCells={gridCells}
              clearedCells={clearedCells}
              playerPosition={playerPosition}
              setPlayerPosition={setPlayerPosition}
              monsters={monsters}
              setMonsters={setMonsters}
              onEatCell={eatCell}
              gameState={gameState}
            />
          </>
        )}

        {gameState === 'LEVEL_COMPLETE' && (
          <div className="level-complete-screen">
            <h1>Level Complete! 🎉</h1>
            <p className="complete-score">Score: {score}</p>
            <p className="complete-message">Get ready for Level {level + 1}...</p>
          </div>
        )}

        {gameState === 'GAME_OVER' && (
          <div className="game-over-screen">
            <h1>Game Over!</h1>
            <p className="final-score">Final Score: {score}</p>
            <p className="final-level">Level Reached: {level}</p>
            <button onClick={startGame} className="restart-button">
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;