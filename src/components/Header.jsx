import { Link } from "react-router-dom"
import { useState, useRef, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useCart } from "../contexts/CartContext"
import Cart from "./Cart"
import logopic from "../assets/HeaderLogo.png"

import '../App.css'

const Header = () => {
    const { user, logout, isAuthenticated } = useAuth();
    const { getCartItemCount, showCart, setShowCart } = useCart();
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const dropdownRef = useRef(null);

    const handleLogout = () => {
        logout();
        setShowProfileDropdown(false);
    };

    const toggleProfileDropdown = () => {
        setShowProfileDropdown(!showProfileDropdown);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowProfileDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header>
            <div className="logo">
                <Link to="/">
                    <img src={logopic} alt="Little Lemon Logo" />
                </Link>
            </div>
            <nav className="headerNav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/reservations">Reservations</Link>
                <Link to="/order">Order Online</Link>
            </nav>
            <div className="header-right">
                {isAuthenticated() && (
                    <button 
                        className="cart-button"
                        onClick={() => setShowCart(!showCart)}
                        title="Shopping Cart"
                    >
                        🛒 ({getCartItemCount()})
                    </button>
                )}
                {isAuthenticated() ? (
                    <div className="profile-container" ref={dropdownRef}>
                        <button 
                            className="profile-button"
                            onClick={toggleProfileDropdown}
                            title="Profile"
                        >
                            👤
                        </button>
                        <div className={`profile-dropdown ${showProfileDropdown ? 'show' : ''}`}>
                            <div className="profile-dropdown-header">
                                <h4>{user?.name}</h4>
                                <p>{user?.email}</p>
                            </div>
                            <button 
                                className="profile-dropdown-item logout"
                                onClick={handleLogout}
                            >
                                🚪 Logout
                            </button>
                        </div>
                    </div>
                ) : (
                    <Link to="/login" className="login-link">Login</Link>
                )}
                <Cart />
            </div>
        </header>
    );
};

export default Header;