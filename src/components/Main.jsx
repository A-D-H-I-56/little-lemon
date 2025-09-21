
import heroImg from "../assets/HeroPic.svg"
const Main=()=>{
    return(
        <main>
            <section className="heroSection">
                <div className="heroText">
                <h2 className="titleText">Little Lemon</h2>
                <h4 >Lahore</h4>
                <p>
                    We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    We are commited to provide Best Food and a taste you never forget</p>
                </div>
                <div className="heroImage">
                    <img src={heroImg} alt="" />
                </div>
            </section>
        </main>
    )
}
export default Main;