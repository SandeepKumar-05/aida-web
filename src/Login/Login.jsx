import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Email is required.');
      return;
    }
    if (!password) {
      setError('Password is required.');
      return;
    }

    // In a real app, here you would handle login logic (e.g., API call)
    console.log('Logging in with', { email, password });
    alert('Logged in (demo)');
    navigate('/dashboard');
  };

  const handleGoogleLogin = () => {
    // Implement Google login logic here
    alert('Google login (demo)');
  };

  return (
    <div className="loginContainer">
      <form onSubmit={handleSubmit}>
        <h2 className="title">Login</h2>
        {error && <div className="error">{error}</div>}
        <label htmlFor="email" className="label">
          Email
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </label>
        <label htmlFor="password" className="label">
          Password
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
            <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </span>
          </div>
        </label>
        <button type="submit">Log In</button>
        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
        <div className="google-login">
          <button type="button" onClick={handleGoogleLogin}>Login with Google</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
