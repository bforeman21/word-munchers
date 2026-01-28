import React from 'react';

/**
 * Cell Component
 * 
 * Represents a single cell in the game grid.
 * Displays a word and can contain the player or monsters.
 */
function Cell({ word, isCleared, children }) {
  return (
    <div className={`cell ${isCleared ? 'cleared' : ''}`}>
      <span className="cell-word">{word}</span>
      {children}
    </div>
  );
}

export default Cell;