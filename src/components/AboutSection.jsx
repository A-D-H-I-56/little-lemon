
import img1 from "../assets/m.png"
import img2 from "../assets/Rectangle.png"

const AboutSection=()=>{
    return(
        <section className="About">
        <div className="aboutText">
            <h3>Little Lemon</h3>
            <h4>Chicago</h4>
            <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment the restaurant features a locally sourced menu with daily specials.Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment the restaurant features a locally sourced menu with daily specials.</p>

        </div>
        <div className="aboutImage">
            <div className="img1">
                <img src={img1} alt="" />
            </div>
            <div className="img2">
                <img src={img2} alt="" />
            </div>
        </div>
        </section>
    )
}

export default AboutSection;