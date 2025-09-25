
import { useNavigate } from "react-router-dom";
import heroImg from "../assets/HeroPic.svg"

const HeroSection=()=>{
    const navigate = useNavigate();

    const handleReserveTable = () => {
        navigate('/reservations');
    };

    return(
        
            <section className="heroSection">
                <div className="heroText">
                <h2 className="titleText">Little Lemon</h2>
                <h4 >Lahore</h4>
                <p>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    We are commited to provide Best Food and a taste you never forget</p>
                <button className="reserveTable" onClick={handleReserveTable}>Reserve a Table</button>
                </div>
                <div className="heroImage">
                    <img src={heroImg} alt="" />
                </div>
            </section>

      
    )
}
export default HeroSection;