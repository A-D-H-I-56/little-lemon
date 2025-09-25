import React from 'react';
import salad from "../assets/GreekSalad.png"
import brucheta from "../assets/Bruchetta.png"
import desert from "../assets/LemonDesert.png"

const MenuPage = () => {
    const menuItems = [
        {
            id: 1,
            name: "Greek Salad",
            price: "$12.99",
            description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            image: salad,
            category: "Appetizers"
        },
        {
            id: 2,
            name: "Bruschetta",
            price: "$5.99",
            description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            image: brucheta,
            category: "Appetizers"
        },
        {
            id: 3,
            name: "Lemon Desert",
            price: "$5.00",
            description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            image: desert,
            category: "Desserts"
        },
        {
            id: 4,
            name: "Mediterranean Pasta",
            price: "$15.99",
            description: "Fresh pasta with sun-dried tomatoes, olives, feta cheese, and herbs in a light olive oil sauce.",
            image: salad,
            category: "Main Courses"
        },
        {
            id: 5,
            name: "Grilled Salmon",
            price: "$18.99",
            description: "Fresh Atlantic salmon grilled to perfection, served with seasonal vegetables and lemon herb butter.",
            image: brucheta,
            category: "Main Courses"
        },
        {
            id: 6,
            name: "Chicken Souvlaki",
            price: "$14.99",
            description: "Tender chicken marinated in Greek herbs and spices, grilled and served with pita bread and tzatziki sauce.",
            image: desert,
            category: "Main Courses"
        }
    ];

    const categories = ["All", "Appetizers", "Main Courses", "Desserts"];

    return (
        <div className="page-container">
            <section className="featured">
                <div className="featuredTop">
                    <h2>Our Menu</h2>
                    <p>Discover our delicious Mediterranean cuisine</p>
                </div>
                
                <div className="featuredCards">
                    {menuItems.map((item) => (
                        <div key={item.id} className="card">
                            <img src={item.image} alt={item.name} />
                            <div className="cardName-price">
                                <h4>{item.name}</h4>
                                <h5>{item.price}</h5>
                            </div>
                            <p>{item.description}</p>
                            <button className="orderDelivery">Order Now</button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default MenuPage;
