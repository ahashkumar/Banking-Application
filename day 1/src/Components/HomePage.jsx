import React from 'react';
import './HomePage.css';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import img3 from './img/img3.jpg';
const Homepage = ({ onThanksClick }) => {
  return (
    <div className="container">
      {/* Navigation bar */}
      <nav>
        <ul>
          <li>
            <button onClick={() => console.log('Home clicked')}>Home</button>
          </li>
          <li>
            <button onClick={() => console.log('Secure Online Banking clicked')}>Secure Online Banking</button>
          </li>
          <li>
            <button onClick={() => console.log('Quick Loan Approval clicked')}>Quick Loan Approval</button>
          </li>
          <li>
            <button onClick={() => console.log('Smart Savings Plans clicked')}>Smart Savings Plans</button>
          </li>
          <li>
            <button onClick={() => console.log('Investment Opportunities clicked')}>Investment Opportunities</button>
          </li>
          <li>
            <button onClick={() => console.log('24/7 Customer Support clicked')}>24/7 Customer Support</button>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <div className="main-content">
        <h1>Welcome to ICICI Bank!</h1>
        <img src={img1}/>
        <img src={img2}/>
        <img src={img3}/>
        
        {/* Banking Elements */}
        <div className="banking-elements">
          <h2>Your ICICI Bank Dashboard</h2>

          <div className="account-balance">
            <h3>Account Balance</h3>
            <p>
              10,000.00
            </p>
          </div>

          <div className="recent-transactions">
            <h3>Recent Transactions</h3>
            <ul>
              <li>Payment to Utility Company - 100.00</li>
              <li>Deposit from Salary - 2,000.00</li>
              <li>Online Shopping - 50.00</li>
            </ul>
          </div>

          <div className="quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <button onClick={() => console.log('Transfer Money clicked')}>Transfer Money</button>
              </li>
              <li>
                <button onClick={() => console.log('Apply for Loan clicked')}>Apply for Loan</button>
              </li>
              <li>
                <button onClick={() => console.log('View Statements clicked')}>View Statements</button>
              </li>
            </ul>
          </div>
          <div className='foot'>
          <li>

                <button onClick={onThanksClick}>Customer Care</button>
              </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
