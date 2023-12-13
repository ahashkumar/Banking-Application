// App.js
import React, { useState } from 'react';
import './App.css';
import WelcomePage from './WelcomePage';
import Login from './login';
import ThanksPage from './ThanksPage'; 

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showThanks, setShowThanks] = useState(false);

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const handleLoginComplete = () => {
    setShowThanks(true);
  };

  const handleThanksDismiss = () => {
    setShowThanks(false);
  };

  return (
    <div>
      {showLogin && !showThanks && (
        <Login onToggleLogin={toggleLogin} onLoginComplete={handleLoginComplete} />
      )}
      {!showLogin && !showThanks && (
        <WelcomePage onToggleLogin={toggleLogin} />
      )}
      {showThanks && (
        <ThanksPage onDismissThanks={handleThanksDismiss} />
      )}
    </div>
  );
};

export default App;
