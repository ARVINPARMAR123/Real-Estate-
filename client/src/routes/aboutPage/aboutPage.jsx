// About.jsx
import { Link } from "react-router-dom";
import "./aboutPage.scss";
import { FaGem, FaUsers, FaHandshake } from "react-icons/fa6";

export default function AboutPage() {
  return (
    <div className="aboutPage">
      <section className="aboutHero">
        <div className="heroContent">
          <h1>About Us</h1>
          <p>Where elegance meets excellence in real estate.</p>
        </div>
      </section>

      <section className="aboutIntro">
        <div className="container">
          <h2>Who We Are</h2>
          <p>
            We're a team of passionate professionals dedicated to helping people
            find their perfect space. Whether you're buying, selling, or
            investing, our deep market knowledge and commitment to quality
            service set us apart.
          </p>
        </div>
      </section>

      <section className="aboutFeatures">
        <div className="container cards">
          <div className="card">
            <FaGem className="icon" />
            <h3>Luxury Listings</h3>
            <p>
              Hand-picked properties with stunning architecture and premium
              amenities.
            </p>
          </div>
          <div className="card">
            <FaUsers className="icon" />
            <h3>Trusted Team</h3>
            <p>
              Professional agents who value trust, transparency, and personal
              connection.
            </p>
          </div>
          <div className="card">
            <FaHandshake className="icon" />
            <h3>Luxury Meets Loyalty</h3>
            <p>
              We guide you through every step, with personalized advice and
              care.
            </p>
          </div>
        </div>
      </section>

      <section className="aboutCTA">
        <div className="container">
          <h2>Ready to find your dream property?</h2>
          <p>Let us help you explore opportunities in style and confidence.</p>
          <Link to="/contact" className="Link">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
