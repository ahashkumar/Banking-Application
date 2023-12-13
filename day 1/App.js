import React, { useState } from 'react';
import './App.css';
import Login from './login';
import ThanksPage from './ThanksPage';

const App = () => {
  const [showThanks, setShowThanks] = useState(false);

  const handleLoginComplete = () => {
    setShowThanks(true);
  };

  const handleThanksDismiss = () => {
    setShowThanks(false);
  };

  return (
    <div>
      {!showThanks ? (
        <Login onLoginComplete={handleLoginComplete} />
      ) : (
        <ThanksPage onDismissThanks={handleThanksDismiss} />
      )}
    </div>
  );
};

export default App;
