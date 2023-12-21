import React, { useState } from 'react';
import './login.css';
import ThanksPage from './ThanksPage';

const Login = ({ onToggleLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showThanks, setShowThanks] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const toggleMode = () => {
    setIsLogin((prevMode) => !prevMode);
    setError('');
  };

  const handleLoginComplete = () => {
    if (!isLogin && (!username.trim() || !email.trim() || !password.trim())) {
      setError('Please fill in all fields.');
      return;
    }

    setShowThanks(true);
  };

  return (
    <body>
      <div>
        {!showThanks ? (
          <div className='container'>
            <div className="header">
              <div className="text">
                {isLogin ? 'ICICI BANK' : 'ICICI BANK'}
              </div>
              <div className="underline"></div>
            </div>
            <div className="welcome-message">
              <p>{isLogin ? 'Welcome back!' : 'Welcome, new user!'}</p>
            </div>
            <div className="inputs">
              <div className="input">
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              {!isLogin && (
                <div className="input">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              )}
              <div className="input">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="error-message">{error}</div>
            <div className="submit-container">
              <div className="submit" onClick={toggleMode}>
                {isLogin ? 'SIGN UP' : 'LOGIN'}
              </div>

              <div className="submit" onClick={() => { handleLoginComplete(); onToggleLogin(); }} disabled={!isLogin && (!username.trim() || !email.trim() || !password.trim())}>
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
