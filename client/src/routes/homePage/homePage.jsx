import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
          <p>Discover your perfect place to live. From cozy apartments to luxurious villas, we offer tailored options that match your lifestyle, budget, and dreams. Start your journey with us today and explore handpicked properties in prime locations.</p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>

      {/* Features Section */}
      <div className="featuresSection" style={{marginTop:'50px'}}>
        <h2 className="sectionTitle">Why Choose Us</h2>
        <div className="featuresGrid">
          <div className="feature">
            <div className="featureIcon">🏠</div>
            <h3>Wide Range of Properties</h3>
            <p>Choose from thousands of properties across various locations, styles, and price ranges</p>
          </div>
          <div className="feature">
            <div className="featureIcon">💰</div>
            <h3>Best Price Guarantee</h3>
            <p>We offer competitive prices and transparent deals with no hidden charges</p>
          </div>
          <div className="feature">
            <div className="featureIcon">🔐</div>
            <h3>Secure Transactions</h3>
            <p>Your safety is our priority. All transactions are verified and secured</p>
          </div>
          <div className="feature">
            <div className="featureIcon">👨‍💼</div>
            <h3>Expert Agents</h3>
            <p>Work with certified real estate professionals who understand your needs</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonialsSection">
        <h2 className="sectionTitle">What Our Clients Say</h2>
        <div className="testimonialsGrid">
          <div className="testimonial">
            <div className="testimonialContent">
              <p>"Found my dream apartment in just 2 weeks! The process was smooth and the team was incredibly helpful throughout."</p>
            </div>
            <div className="testimonialAuthor">
              <img src="https://i.pravatar.cc/150?img=1" alt="Client" />
              <div>
                <h4>Sarah Johnson</h4>
                <span>New York, NY</span>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonialContent">
              <p>"Best real estate experience ever! Professional service, great properties, and excellent communication."</p>
            </div>
            <div className="testimonialAuthor">
              <img src="https://i.pravatar.cc/150?img=13" alt="Client" />
              <div>
                <h4>Michael Chen</h4>
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonialContent">
              <p>"Sold my property above asking price. Their marketing strategy and agent expertise made all the difference."</p>
            </div>
            <div className="testimonialAuthor">
              <img src="https://i.pravatar.cc/150?img=5" alt="Client" />
              <div>
                <h4>Emily Rodriguez</h4>
                <span>Miami, FL</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="howItWorksSection">
        <h2 className="sectionTitle">How It Works</h2>
        <div className="stepsContainer">
          <div className="step">
            <div className="stepNumber">1</div>
            <h3>Search Properties</h3>
            <p>Browse through our extensive listings using advanced filters</p>
          </div>
          <div className="step">
            <div className="stepNumber">2</div>
            <h3>Schedule Visit</h3>
            <p>Book a viewing with our agents at your convenience</p>
          </div>
          <div className="step">
            <div className="stepNumber">3</div>
            <h3>Make an Offer</h3>
            <p>Submit your offer and negotiate with our expert guidance</p>
          </div>
          <div className="step">
            <div className="stepNumber">4</div>
            <h3>Move In</h3>
            <p>Complete the paperwork and move into your new home</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="ctaSection">
        <div className="ctaContent">
          <h2>Ready to Find Your Dream Home?</h2>
          <p>Join thousands of happy homeowners who found their perfect property with us</p>
          <div className="ctaButtons">
            <button className="primaryBtn">Browse Properties</button>
            <button className="secondaryBtn">Talk to an Agent</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
