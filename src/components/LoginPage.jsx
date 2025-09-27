import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { login, register } = useAuth();
    const [error, setError] = useState('');
    
    const redirectTo = searchParams.get('redirect') || '/';

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            if (isLogin) {
                // Handle login
                await login(formData.email, formData.password);
                alert('Login successful! Redirecting...');
                navigate(redirectTo);
            } else {
                // Handle registration
                if (formData.password !== formData.confirmPassword) {
                    setError('Passwords do not match!');
                    return;
                }
                if (formData.password.length < 6) {
                    setError('Password must be at least 6 characters long!');
                    return;
                }
                
                const userData = {
                    name: formData.name,
                    email: formData.email,
                    password: formData.password
                };
                
                await register(userData);
                alert('Registration successful! Redirecting...');
                navigate(redirectTo);
            }
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="page-container">
            <section className="featured">
                <div className="featuredTop">
                    <h2>{isLogin ? 'Login' : 'Create Account'}</h2>
                    <p>{isLogin ? 'Welcome back to Little Lemon' : 'Join the Little Lemon family'}</p>
                    <p className="welcome-message">
                        Login required to make reservations and place orders
                    </p>
                </div>
                
                <div className="login-form-container">
                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}
                    <div className="login-toggle-container">
                        <button
                            onClick={() => setIsLogin(true)}
                            className={`login-toggle-button ${isLogin ? 'active' : ''}`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => setIsLogin(false)}
                            className={`login-toggle-button ${!isLogin ? 'active' : ''}`}
                        >
                            Register
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="form-group">
                        {!isLogin && (
                            <div className="form-field">
                                <label htmlFor="name" className="form-label">Full Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required={!isLogin}
                                    className="form-input"
                                />
                            </div>
                        )}

                        <div className="form-field">
                            <label htmlFor="email" className="form-label">Email *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>

                        <div className="form-field">
                            <label htmlFor="password" className="form-label">Password *</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="form-input"
                            />
                        </div>

                        {!isLogin && (
                            <div className="form-field">
                                <label htmlFor="confirmPassword" className="form-label">Confirm Password *</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required={!isLogin}
                                    className="form-input"
                                />
                            </div>
                        )}

                        <button 
                            type="submit" 
                            className="reserveTable form-submit-button"
                        >
                            {isLogin ? 'Login' : 'Create Account'}
                        </button>
                    </form>

                    {isLogin && (
                        <div className="login-switch-text">
                            <p>Don't have an account? 
                                <button 
                                    onClick={() => setIsLogin(false)}
                                    className="login-switch-link"
                                >
                                    Sign up here
                                </button>
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default LoginPage;
