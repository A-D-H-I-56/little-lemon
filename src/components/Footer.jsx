import ftrLogo from "../assets/footerLogo 1.png"

const Footer = () => {


    return (
        <footer>
            <div className="footerLogo">
                <img src={ftrLogo} alt="" />
            </div>
            <div className="navCategories">
            <div>
                <h4>Doormat Navigations</h4>
                <nav className="subNav">
                <a href="/home">Home</a>
                <a href="/About">About</a>
                <a href="/Menu">Menu</a>
                <a href="/Reservations">Reservations</a>
                <a href="/order">Order Online</a>
                <a href="/login">Login</a>

                </nav>
            </div>
            <div>
                <h4>Contacts</h4>
                <nav className="subNav">
                <a href="/address">Address</a>
                <a href="/phone">Phone Number</a>
                <a href="/email">Email</a>

                </nav>
            </div>
            <div>
                <h4>Social Media Links</h4>
                <nav className="subNav">
                <a href="/facebook">Facebook</a>
                <a href="/instagram">Instagram</a>
                <a href="/tiktok">TikTok</a>

                </nav>
            </div>

            </div>

        </footer>
    )
}

export default Footer;