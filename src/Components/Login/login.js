import React from 'react';
import './Login.css';
import plant from '../../assets/plant.jpg'
import Eviden from '../../assets/Eviden.jpg'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
      e.preventDefault();
      
      navigate('/dashboard');
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
                <h3>Welcome to Carbon <br />Calculator Application</h3>
                <form>
                    <div>
                        <p>Please login to your account</p>
                        <input type="text" id="username" name="username" placeholder="Username" />
                    </div>
                    <div>
                        <input type="password" id="password" name="password" placeholder="Password" />
                    </div>
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
