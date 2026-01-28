import "./contactPage.scss";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Get in Touch</h1>
        <p>
          We’re here to help you find your dream property. Reach out anytime.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-box">
            <FaPhone className="icon" />
            <p>+91 98765 43210</p>
          </div>
          <div className="info-box">
            <FaEnvelope className="icon" />
            <p>info@hevenedge.com</p>
          </div>
          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <p>123 Luxury Avenue, Ahmedabad, India</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
