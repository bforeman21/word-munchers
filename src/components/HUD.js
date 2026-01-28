import React from 'react';

/**
 * HUD Component
 * 
 * Displays game information at the top of the screen:
 * - Current level
 * - Score
 * - Current rule/category
 * - Lives remaining
 */
function HUD({ level, score, lives, rule }) {
  return (
    <div className="hud">
      <div className="hud-left">
        <div className="hud-item">
          <span className="hud-label">LEVEL:</span>
          <span className="hud-value">{level}</span>
        </div>
        <div className="hud-item">
          <span className="hud-label">SCORE:</span>
          <span className="hud-value">{score}</span>
        </div>
      </div>

      <div className="rule-display">
        <div className="rule-text">{rule}</div>
      </div>

      <div className="hud-right">
        <div className="lives-display">
          {Array.from({ length: lives }).map((_, index) => (
            <div key={index} className="life-icon" title="Life" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HUD;