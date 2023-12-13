
import React from 'react';
import './WelcomePage.css';

const WelcomePage = ({ onToggleLogin }) => {
  return (
    <div className="welcome-container">
      <h1>WELCOME TO  CICIC BANK</h1>
      <p>MORE MONEY LESS INTEREST</p>
      <button onClick={onToggleLogin}>LOGIN</button>
    </div>
  );
};

export default WelcomePage;
