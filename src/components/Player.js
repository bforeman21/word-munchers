import React from 'react';

/**
 * Player Component
 * 
 * Displays the player character (a frog).
 * Uses an emoji for now, but can be replaced with a sprite later.
 */
function Player() {
  return (
    <div className="player">
      <div className="player-sprite">🐸</div>
    </div>
  );
}

export default Player;