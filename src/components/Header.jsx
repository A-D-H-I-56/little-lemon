
import logopic from "../assets/HeaderLogo.png"
import '../App.css'
const Header=()=>{
    return(
        <header >
            <div className="logo">
                <a href="/">
                <img src={logopic} alt="" />
                </a>
            </div>
            <nav className="headerNav">
                <a href="/home">Home</a>
                <a href="/AboutSection">About</a>
                <a href="/Menu">Menu</a>
                <a href="/Reservations">Reservations</a>
                <a href="/order">Order Online</a>
                <a href="/login">Login</a>
            </nav>


        </header>
    )
}

export default Header;