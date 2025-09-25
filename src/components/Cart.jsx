import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
    const { user } = useAuth();
    const { cart, showCart, setShowCart, updateQuantity, removeFromCart } = useCart();
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getCartItemCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    if (!showCart) return null;

    return (
        <div className="cart-overlay">
            <div className="cart-modal">
                <button
                    onClick={() => setShowCart(false)}
                    className="cart-close-button"
                >
                    ×
                </button>

                <h2 className="cart-title">Your Order</h2>
                {user && (
                    <p className="cart-user-info">
                        Ordering for: {user.name} ({user.email})
                    </p>
                )}
                
                {cart.length === 0 ? (
                    <div className="cart-empty">
                        <p className="cart-empty-title">Your cart is empty</p>
                        <p className="cart-empty-subtitle">Add some delicious items to get started!</p>
                    </div>
                ) : (
                    <>
                        <div style={{ marginBottom: '20px' }}>
                            {cart.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="cart-item-info">
                                        <h4>{item.name}</h4>
                                        <p className="cart-item-price">
                                            ${item.price.toFixed(2)} each
                                        </p>
                                    </div>
                                    <div className="cart-item-controls">
                                        <button 
                                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                                            className="cart-quantity-button"
                                        >-</button>
                                        <span className="cart-quantity-display">
                                            {item.quantity}
                                        </span>
                                        <button 
                                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                                            className="cart-quantity-button"
                                        >+</button>
                                        <button 
                                            onClick={() => onRemoveItem(item.id)}
                                            className="cart-remove-button"
                                        >Remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="cart-footer">
                            <h3 className="cart-total">
                                Total: ${getTotalPrice().toFixed(2)}
                            </h3>
                            <button 
                                className="reserveTable cart-checkout-button"
                                onClick={() => {
                                    alert('Order placed successfully!');
                                    setShowCart(false);
                                }}
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
