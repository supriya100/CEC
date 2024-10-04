import React, { useState } from 'react';
import './Signup.css';
import plant from '../../assets/plant.jpg'
import Eviden from '../../assets/Eviden.jpg'
const SignUp = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();


    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const userData = {
      name,
      email,
      password,
      confirmPassword,
      error
    };

    localStorage.setItem('user', JSON.stringify(userData));


    window.location.href = '/login';
  };

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
          <form onSubmit={handleSignUp}>
            <div className="input-group">

              <input type="text" id="name" placeholder="Enter your name" value={name}
                onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="input-group">

              <input type="email" id="email" placeholder="Enter your email" value={email}
                onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-group">

              <input type="password" id="password" placeholder="Enter your password" value={password}
                onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="input-group">

              <input type="password" id="confirm-password" placeholder="Confirm your password" value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            {error && <p className="error">{error}</p>}
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
