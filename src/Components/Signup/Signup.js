import React from 'react';
import './Signup.css';
import plant from '../../assets/plant.jpg'
import Eviden from '../../assets/Eviden.jpg'
const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-image">
          <img src={plant} alt="Sign Up" />
          <div className="image-text">Join our community today!</div>
        </div>


        <div className="signup-form">
        <div className="signup-icons">
                <img src={Eviden} alt="AWS Icon 1" />

            </div>
          <h3>Create account!</h3>
          <form>
            <div className="input-group">
             
              <input type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="input-group">
            
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="input-group">
              
              <input type="password" id="password" placeholder="Enter your password" required />
            </div>
            <div className="input-group">
              
              <input type="password" id="confirm-password" placeholder="Confirm your password" required />
            </div>
            <button type="submit" className="signup-button">Sign Up</button>
          </form>

          <div className="login-redirect">
            Already have an account? <a href="/login">Log In</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
