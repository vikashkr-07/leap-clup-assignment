import React from 'react';

const Header = ({ restartGame,turns,matches }) => (
  <div className="grid-header-container">
    <div className="justify-left timer"></div>
    <div className="justify-center game-status-text"></div>
    <div className="justify-end">
    <h1 className="title">{`Matches: ${matches}`}</h1>
      <button onClick={restartGame} className="restart-button">Restart Game</button>
      <h1 className="title">{`Turns: ${turns}`}</h1>
    </div>
  </div>
);

export default Header;