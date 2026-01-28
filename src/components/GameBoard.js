import React, { useEffect, useRef } from 'react';
import Cell from './Cell';
import Player from './Player';
import Monster from './Monster';

/**
 * GameBoard Component
 * 
 * This component manages:
 * - The game grid display
 * - Player movement via keyboard
 * - Monster AI and movement
 * - Cell eating mechanics
 */
function GameBoard({ 
  rows, 
  cols, 
  gridCells, 
  clearedCells, 
  playerPosition, 
  setPlayerPosition,
  monsters,
  setMonsters,
  onEatCell,
  gameState
}) {
  const boardRef = useRef(null);

  // Handle keyboard input for player movement
  useEffect(() => {
    if (gameState !== 'PLAYING') return;

    const handleKeyDown = (e) => {
      // Prevent default scrolling behavior
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        case 'ArrowUp':
          setPlayerPosition(prev => ({
            ...prev,
            row: Math.max(0, prev.row - 1)
          }));
          break;
        case 'ArrowDown':
          setPlayerPosition(prev => ({
            ...prev,
            row: Math.min(rows - 1, prev.row + 1)
          }));
          break;
        case 'ArrowLeft':
          setPlayerPosition(prev => ({
            ...prev,
            col: Math.max(0, prev.col - 1)
          }));
          break;
        case 'ArrowRight':
          setPlayerPosition(prev => ({
            ...prev,
            col: Math.min(cols - 1, prev.col + 1)
          }));
          break;
        case ' ':
          onEatCell();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameState, rows, cols, setPlayerPosition, onEatCell]);

  // Monster AI - move toward player
  useEffect(() => {
    if (gameState !== 'PLAYING' || monsters.length === 0) return;

    const moveMonsters = () => {
      setMonsters(prevMonsters => 
        prevMonsters.map(monster => {
          // Calculate direction to player
          const rowDiff = playerPosition.row - monster.row;
          const colDiff = playerPosition.col - monster.col;

          // Move one step toward player
          let newRow = monster.row;
          let newCol = monster.col;

          // Randomly choose to move in row or column direction
          if (Math.abs(rowDiff) > 0 && Math.abs(colDiff) > 0) {
            if (Math.random() > 0.5) {
              newRow = rowDiff > 0 ? monster.row + 1 : monster.row - 1;
            } else {
              newCol = colDiff > 0 ? monster.col + 1 : monster.col - 1;
            }
          } else if (Math.abs(rowDiff) > 0) {
            newRow = rowDiff > 0 ? monster.row + 1 : monster.row - 1;
          } else if (Math.abs(colDiff) > 0) {
            newCol = colDiff > 0 ? monster.col + 1 : monster.col - 1;
          }

          return {
            ...monster,
            row: newRow,
            col: newCol
          };
        })
      );
    };

    // Move monsters every 800ms (adjust for difficulty)
    const interval = setInterval(moveMonsters, 800);
    return () => clearInterval(interval);
  }, [gameState, monsters.length, playerPosition, setMonsters]);

  return (
    <div className="game-board" ref={boardRef}>
      <div 
        className="grid" 
        style={{ 
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gridTemplateColumns: `repeat(${cols}, 1fr)`
        }}
      >
        {gridCells.map((cell, index) => {
          const row = Math.floor(index / cols);
          const col = index % cols;
          const isCleared = clearedCells.includes(index);
          const hasPlayer = playerPosition.row === row && playerPosition.col === col;
          const monster = monsters.find(m => m.row === row && m.col === col);

          return (
            <Cell 
              key={index}
              word={cell.word}
              isCleared={isCleared}
            >
              {hasPlayer && <Player />}
              {monster && <Monster />}
            </Cell>
          );
        })}
      </div>
    </div>
  );
}

export default GameBoard;