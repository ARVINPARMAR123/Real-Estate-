import { Link } from "react-router-dom";
import "./footerPage.scss";

function FooterPage() {
  return (
    <div className="footerPage">
      <div className="footerContainer">
        <div className="footerWrapper">
          {/* Company Info Section */}
          <div className="footerSection">
            <div className="logo">
              <img src="/logo.png" alt="Logo" />
              <span>RealEstate</span>
            </div>
            <p className="description">
              Your trusted partner in finding the perfect property. We offer premium real estate services with a commitment to excellence.
            </p>
            <div className="socialLinks">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="footerSection">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/list">Properties</Link></li>
              <li><Link to="/agents">Our Agents</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="footerSection">
            <h3>Our Services</h3>
            <ul>
              <li><Link to="/list?type=buy">Buy Property</Link></li>
              <li><Link to="/list?type=rent">Rent Property</Link></li>
              <li><Link to="/add">Sell Property</Link></li>
              <li><Link to="/agents">Property Management</Link></li>
              <li><Link to="/contact">Consultation</Link></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="footerSection">
            <h3>Contact Us</h3>
            <ul className="contactInfo">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Main Street, City, Country</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+1 234 567 8900</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>info@realestate.com</span>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footerBottom">
          <div className="bottomWrapper">
            <p>&copy; {new Date().getFullYear()} RealEstate. All rights reserved.</p>
            <div className="bottomLinks">
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/terms">Terms of Service</Link>
              <Link to="/sitemap">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterPage;
