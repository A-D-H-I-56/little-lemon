import { Link } from "react-router-dom"
import ftrLogo from "../assets/footerLogo 1.png"

const Footer = () => {


    return (
        <footer>
            <div className="footerLogo">
                <img src={ftrLogo} alt="Little Lemon Footer Logo" />
            </div>
            <div className="navCategories">
            <div>
                <h4>Doormat Navigations</h4>
                <nav className="subNav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/reservations">Reservations</Link>
                <Link to="/order">Order Online</Link>
                <Link to="/login">Login</Link>

                </nav>
            </div>
            <div>
                <h4>Contacts</h4>
                <nav className="subNav">
                <a href="#address">Address</a>
                <a href="#phone">Phone Number</a>
                <a href="#email">Email</a>

                </nav>
            </div>
            <div>
                <h4>Social Media Links</h4>
                <nav className="subNav">
                <a href="#facebook">Facebook</a>
                <a href="#instagram">Instagram</a>
                <a href="#tiktok">TikTok</a>

                </nav>
            </div>

            </div>

        </footer>
    )
}

export default Footer;