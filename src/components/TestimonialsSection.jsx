
import reviewer from '../assets/reviewer.jpg'
const TestimonialsSection = () => {
return(
    <section className="Reviews">
        <h3>Our Customers love us!</h3>
        <div className="reviewCards">
            <div className="reviewCard">
                <h5>⭐⭐⭐⭐⭐</h5>
                <h5>Review Title</h5>
                <p>Review Body</p>
                <div className="reviewer">
                    <img src={reviewer} alt="" />
                    <h4>Reviewer Name</h4>

                </div>
                <p>Date</p>
            </div>
            <div className="reviewCard">
                <h5>⭐⭐⭐⭐⭐</h5>
                <h5>Review Title</h5>
                <p>Review Body</p>
                <div className="reviewer">
                    <img src={reviewer} alt="" />
                    <h4>Reviewer Name</h4>

                </div>
                <p>Date</p>
            </div>
            <div className="reviewCard">
                <h5>⭐⭐⭐⭐⭐</h5>
                <h5>Review Title</h5>
                <p>Review Body</p>
                <div className="reviewer">
                    <img src={reviewer} alt="" />
                    <h4>Reviewer Name</h4>

                </div>
                <p>Date</p>
            </div>
            <div className="reviewCard">
                <h5>⭐⭐⭐⭐⭐</h5>
                <h5>Review Title</h5>
                <p>Review Body</p>
                <div className="reviewer">
                    <img src={reviewer} alt="" />
                    <h4>Reviewer Name</h4>

                </div>
                <p>Date</p>
            </div>
        </div>
    </section>
)


}
export default TestimonialsSection;