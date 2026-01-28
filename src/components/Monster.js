import React from 'react';

/**
 * Monster Component
 * 
 * Displays an enemy monster that chases the player.
 * Uses an emoji for now, but can be replaced with a sprite later.
 */
function Monster() {
  return (
    <div className="monster">
      <div className="monster-sprite">👾</div>
    </div>
  );
}

export default Monster;