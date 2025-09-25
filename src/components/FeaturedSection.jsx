import salad from "../assets/GreekSalad.png"
import brucheta from "../assets/Vector.png"
import desert from "../assets/LemonDesert.png"
const FeaturedSection=()=>{
return(
                <section className="featured">
                <div className="featuredTop">
                    <h3>This week's specials!</h3>
                   
                </div>
                <div className="featuredCards">
                    <div className="card">
                        <img src={salad} alt="Salad" />
                        <div className="cardName-price">
                        <h4>Greek Salad</h4>
                        <h5>$12.99</h5>
                        </div>
                        
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <button className="orderDelivery" onClick={()=>{
                            alert('Ding🔔! Your order is now being prepared');
                        }}>Order Delivery</button>
                    </div>
                    <div className="card">
                        <img src={brucheta} alt="Salad" />
                        <div className="cardName-price">
                        <h4>Bruschetta</h4>
                        <h5>$5.99</h5>
                        </div>
                        
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <button className="orderDelivery" onClick={()=>{
                            alert('Ding🔔! Your order is now being prepared');
                        }}>Order Delivery</button>
                    </div>
                    <div className="card">
                        <img src={desert} alt="Salad" />
                        <div className="cardName-price">
                        <h4>Lemon Desert</h4>
                        <h5>$5</h5>
                        </div>
                        
                        <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <button className="orderDelivery" onClick={()=>{
                            alert('Ding🔔! Your order is now being prepared');
                        }}>Order Delivery</button>
                    </div>
                </div>
            </section>
)

}

export default FeaturedSection;