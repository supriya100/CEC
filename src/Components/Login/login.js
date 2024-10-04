import React, { useState } from 'react';
import './Login.css';
import plant from '../../assets/plant.jpg'
import Eviden from '../../assets/Eviden.jpg'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleLogin = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            window.location.href = '/dashboard';
        } else {
            setError('Invalid email or password');
        }

    };

    return (

        <div className="login-page">


            <div className="aws-icons">
                <img src={Eviden} alt="AWS Icon 1" />

            </div>
            <div className="login-image">
                <img src={plant} />
                <div className="image-text">
                    Carbon Calculation
                    <div className="image-textt">
                        cloud based decarbonization platform enabling automated carbon calculation forecasting with climate
                        impact <br /> and manage residual carbon all from one platform
                    </div>
                </div>
            </div>


            <div className="login-container">
                <h2>Welcome to Carbon <br />Calculator Application</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        <p className='text'>Please login to your account</p>
                        <input type="text" id="username" name="username" placeholder="Username" value={email}
                            onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <input type="password" id="password" name="password" placeholder="Password" value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <div>
                        <button type="submit">Login</button>
                    </div>
                    <p className="forgot-password">
                        <a href="/forgot-password">Forgot Password?</a>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
