import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import GameBoard from './components/GameBoard';
import HUD from './components/HUD';
import { rules } from './data/rules';

const HIGH_SCORES_KEY = 'wordMunchersHighScores';
const MAX_HIGH_SCORES = 10;

function loadHighScores() {
  try {
    const stored = localStorage.getItem(HIGH_SCORES_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch (e) {
    // ignore
  }
  return [];
}

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

  // High scores (persisted in localStorage)
  const [highScores, setHighScores] = useState(() => loadHighScores());
  const [initials, setInitials] = useState('');
  const [scoreSubmitted, setScoreSubmitted] = useState(false);

  // Game configuration
  const GRID_ROWS = 5;
  const GRID_COLS = 6;
  const MONSTER_SPAWN_DELAY = 10000; // 10 seconds in milliseconds

  // Initialize a new level (optional levelOverride when advancing so we use the next level)
  const initializeLevel = useCallback((levelOverride) => {
    const effectiveLevel = levelOverride !== undefined ? levelOverride : level;
    // Select a random rule for this level
    const randomRule = rules[Math.floor(Math.random() * rules.length)];
    setCurrentRule(randomRule);

    // Generate grid with mix of correct and incorrect answers
    const cells = [];
    const numCorrect = 8 + Math.floor(effectiveLevel / 3); // More correct answers as level increases
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
    setScoreSubmitted(false);
    setInitials('');
    initializeLevel();
  };

  // Add a score to high scores (top 10, sorted by score descending)
  const addHighScore = (initialsStr, scoreValue) => {
    const trimmed = initialsStr.slice(0, 3).toUpperCase().replace(/[^A-Z]/g, '');
    if (!trimmed) return;
    const next = [...highScores, { initials: trimmed, score: scoreValue }]
      .sort((a, b) => b.score - a.score)
      .slice(0, MAX_HIGH_SCORES);
    setHighScores(next);
    try {
      localStorage.setItem(HIGH_SCORES_KEY, JSON.stringify(next));
    } catch (e) {
      // ignore
    }
    setScoreSubmitted(true);
  };

  const handleInitialsChange = (e) => {
    const val = e.target.value.replace(/[^a-zA-Z]/g, '').slice(0, 3).toUpperCase();
    setInitials(val);
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
        // Level complete! Wait for player to click "Let's Go!"
        setGameState('LEVEL_COMPLETE');
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
            <div className="high-scores-section">
              <h3>High Scores</h3>
              <table className="high-scores-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Initials</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {highScores.slice(0, MAX_HIGH_SCORES).map((entry, index) => (
                    <tr key={`${entry.initials}-${entry.score}-${index}`}>
                      <td>{index + 1}</td>
                      <td>{entry.initials}</td>
                      <td>{entry.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {highScores.length === 0 && (
                <p className="no-scores-message">No high scores yet. Play to add one!</p>
              )}
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
            <p className="complete-message">Are you ready for the next level?</p>
            <button
              onClick={() => {
                setLevel(prev => prev + 1);
                setGameState('PLAYING');
                initializeLevel(level + 1);
              }}
              className="lets-go-button"
            >
              Let's Go!
            </button>
          </div>
        )}

        {gameState === 'GAME_OVER' && (
          <div className="game-over-screen">
            <h1>Game Over!</h1>
            <p className="final-score">Final Score: {score}</p>
            <p className="final-level">Level Reached: {level}</p>
            {!scoreSubmitted ? (
              <div className="high-score-entry">
                <label htmlFor="initials-input">Enter your initials (3 letters):</label>
                <input
                  id="initials-input"
                  type="text"
                  maxLength={3}
                  value={initials}
                  onChange={handleInitialsChange}
                  placeholder="AAA"
                  className="initials-input"
                  autoComplete="off"
                />
                <button
                  type="button"
                  onClick={() => {
                    setGameState('START');
                    setScoreSubmitted(false);
                    setInitials('');
                  }}
                  className="skip-button"
                >
                  Skip
                </button>
                <button
                  type="button"
                  onClick={() => addHighScore(initials, score)}
                  disabled={initials.length < 1}
                  className="submit-score-button"
                >
                  Add to High Scores
                </button>
              </div>
            ) : (
              <p className="score-saved-message">Score saved!</p>
            )}
            <div className="high-scores-section">
              <h3>High Scores</h3>
              <table className="high-scores-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Initials</th>
                    <th>Score</th>
                  </tr>
                </thead>
                <tbody>
                  {highScores.slice(0, MAX_HIGH_SCORES).map((entry, index) => (
                    <tr key={`${entry.initials}-${entry.score}-${index}`}>
                      <td>{index + 1}</td>
                      <td>{entry.initials}</td>
                      <td>{entry.score}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {highScores.length === 0 && (
                <p className="no-scores-message">No high scores yet. Play to add one!</p>
              )}
            </div>
            <button
              onClick={startGame}
              className={`restart-button${!scoreSubmitted ? ' inactive' : ''}`}
              disabled={!scoreSubmitted}
            >
              Play Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;