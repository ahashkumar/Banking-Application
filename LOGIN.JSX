
import React, { useState } from 'react';
import './login.css';
import ThanksPage from './ThanksPage'; 

const Login = ({ onToggleLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showThanks, setShowThanks] = useState(false); 
  const toggleMode = () => {
    setIsLogin((prevMode) => !prevMode);
  };

  const welcomeMessage = isLogin ? 'Welcome back!' : 'Welcome, new user!';

  const handleLoginComplete = () => {
    setShowThanks(true);
  };

  return (
    <body>
        <h1>
              
        </h1>
    <div>
      {!showThanks ? (
        <div className='container'>
          <div className="header">
            <div className="text">
              {isLogin ? 'Login' : 'Sign Up'}
            </div>
            <div className="underline"></div>
          </div>
          <div className="welcome-message">
            <p>{welcomeMessage}</p>
          </div>
          <div className="inputs">
            <div className="input">
              <input type="text" placeholder="Username"></input>
            </div>
            {!isLogin && (
              <div className="input">
                <input type="email" placeholder="Email"></input>
              </div>
            )}
            <div className="input">
              <input type="password" placeholder="Password"></input>
            </div>
          </div>
          <div className="submit-container">
            <div className="submit" onClick={toggleMode}>
              {isLogin ? 'SIGN UP' : 'LOGIN'}
            </div>
            <div className="submit" onClick={handleLoginComplete}>
              FINISH
            </div>
            <div className="submit" onClick={onToggleLogin}>
              BACK TO HOME
            </div>
          </div>
        </div>
      ) : (
        <ThanksPage />
      )}
    </div>
    </body>
  );
};

export default Login;
