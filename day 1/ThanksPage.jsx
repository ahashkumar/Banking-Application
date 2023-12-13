
import React from 'react';
import './ThanksPage.css';
const ThanksPage = ({ onDismissThanks }) => {
  return (
    <div className="thanks-container">
      <h1>Thank you!!</h1>
      <p>SAFE BANKING WITH CICIC BANK</p>
      <button onClick={onDismissThanks}>Dismiss</button>
    </div>
  );
};

export default ThanksPage;
