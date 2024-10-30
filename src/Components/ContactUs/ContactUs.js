import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./contactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-page" id="contact">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-info">
            <h1>Contact Us</h1>
            <div className="info-item">
              <FaPhone className="icon" />
              <p>+92 307-2973307</p>
            </div>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <p>info@labofcode.com</p>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <p>123 Main St, Karachi, Pakistan</p>
            </div>
            <div className="social-media">
              <h2>Follow Us</h2>
              <div className="social-icons">
                <a href="#" className="social-icon">
                  <FaYoutube />
                </a>
                <a href="#" className="social-icon">
                  <FaFacebookF />
                </a>
                <a href="#" className="social-icon">
                  <FaInstagram />
                </a>
                <a href="#" className="social-icon">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>
          <div className="location-image">
            <img
              src="https://thumbs.dreamstime.com/z/pushpin-pointing-karachi-city-pakistan-prague-czech-republic-january-red-thumbtack-map-170546984.jpg"
              alt="Our Location"
            />
          </div>
        </div>
      </div>
      <footer className="contact-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>About Us</h3>
            <ul>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Web Development</a>
              </li>
              <li>
                <a href="#">Mobile Apps</a>
              </li>
              <li>
                <a href="#">Consulting</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Resources</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Tutorials</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
