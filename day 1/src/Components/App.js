// App.js
import React, { useState } from 'react';
import Homepage from './HomePage';
import ThanksPage from './ThanksPage';
import Login from './login';  // Import LoginPage

const App = () => {
  const [showThanksPage, setShowThanksPage] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(true);  // Add state for login page visibility

  const handleDismissThanks = () => {
    setShowThanksPage(false);
  };

  const handleToggleLogin = () => {
    setShowLoginPage(!showLoginPage);
  };

  return (
    <div>
      {showThanksPage ? (
        <ThanksPage onDismissThanks={handleDismissThanks} />
      ) : showLoginPage ? (
        <Login onToggleLogin={handleToggleLogin} />
      ) : (
        <Homepage onThanksClick={() => setShowThanksPage(true)} />
      )}
    </div>
  );
};

export default App;
