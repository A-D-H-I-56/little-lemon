
import person from '../assets/person.png'

const TestimonialsSection = () => {
    const testimonials = [
        {
            id: 1,
            rating: "⭐⭐⭐⭐⭐",
            title: "Amazing Mediterranean Experience",
            body: "The Greek salad was absolutely incredible! Fresh ingredients and authentic flavors. The atmosphere is cozy and the staff is very welcoming. Will definitely be back!",
            name: "Sarah Johnson",
            date: "March 15, 2024"
        },
        {
            id: 2,
            rating: "⭐⭐⭐⭐⭐",
            title: "Best Bruschetta in Town",
            body: "I've tried bruschetta at many places, but nothing compares to Little Lemon's version. The bread is perfectly grilled and the toppings are fresh and flavorful. Highly recommended!",
            name: "Michael Chen",
            date: "March 12, 2024"
        },
        {
            id: 3,
            rating: "⭐⭐⭐⭐⭐",
            title: "Perfect for Date Night",
            body: "My wife and I had our anniversary dinner here and it was perfect. The lemon dessert was the perfect ending to our meal. The service was excellent and the food was outstanding.",
            name: "David Rodriguez",
            date: "March 10, 2024"
        },
        {
            id: 4,
            rating: "⭐⭐⭐⭐⭐",
            title: "Family Favorite",
            body: "We bring our kids here regularly and they love it! The portions are generous and the food is always fresh. The staff remembers us and makes us feel like family.",
            name: "Emily Williams",
            date: "March 8, 2024"
        }
    ];

    return(
        <section className="Reviews">
            <h3>Our Customers love us!</h3>
            <div className="reviewCards">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="reviewCard">
                        <h5>{testimonial.rating}</h5>
                        <h5>{testimonial.title}</h5>
                        <p>{testimonial.body}</p>
                        <div className="reviewer">
                            <img src={person} alt={testimonial.name} />
                            <h4>{testimonial.name}</h4>
                        </div>
                        <p>{testimonial.date}</p>
                    </div>
                ))}
            </div>
        </section>
    )


}
export default TestimonialsSection;