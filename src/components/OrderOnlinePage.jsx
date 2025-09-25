import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import salad from "../assets/GreekSalad.png"
import brucheta from "../assets/Bruchetta.png"
import desert from "../assets/LemonDesert.png"

const OrderOnlinePage = () => {
    const { user } = useAuth();
    const { addToCart } = useCart();

    const menuItems = [
        {
            id: 1,
            name: "Greek Salad",
            price: 12.99,
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            image: salad,
            category: "Appetizers"
        },
        {
            id: 2,
            name: "Bruschetta",
            price: 5.99,
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            image: brucheta,
            category: "Appetizers"
        },
        {
            id: 3,
            name: "Lemon Desert",
            price: 5.00,
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            image: desert,
            category: "Desserts"
        },
    
    ];


    return (
        <div className="page-container">
            <section className="featured">
                <div className="featuredTop">
                    {user && (
                            <p className="<welcome-message-header">
                                Welcome, {user.name}!
                            </p>
                        )}
                    <h2>Order Online</h2>
                    <div className="order-header-container">
                        <p>Delicious food delivered to your door</p>
                        
                    </div>
                </div>
                
                <div className="featuredCards">
                    {menuItems.map((item) => (
                        <div key={item.id} className="card">
                            <img src={item.image} alt={item.name} />
                            <div className="cardName-price">
                                <h4>{item.name}</h4>
                                <h5>${item.price.toFixed(2)}</h5>
                            </div>
                            <p>{item.description}</p>
                            <button 
                                className="orderDelivery"
                                onClick={() => addToCart(item)}
                            >
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default OrderOnlinePage;
