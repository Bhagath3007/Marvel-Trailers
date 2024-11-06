// src/Footer.js
import React from 'react';
import './footer.css';  // Make sure this matches the actual file name

const Footer = () => {
  // Function to split text into individual letters for animation
  const splitText = (text) => {
    return text.split('').map((letter, i) => (
      <span key={i} style={{ '--i': i }}>{letter}</span>
    ));
  }

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__left">
          <h4 className="footer__brand flowing-text">
            {splitText("Marvel Movie Hub")}
          </h4>
          <p className="footer__description">
            Your go-to platform for all Marvel movie trailers, news, and more.
          </p>
        </div>
        <div className="footer__center">
          <ul className="footer__links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer__right">
          <h4>Follow Us</h4>
          <div className="footer__socials">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://x.com/gbhagath77" target="_blank" rel="noopener noreferrer" className="footer__social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/in/bhagath-gajarla/" target="_blank" rel="noopener noreferrer" className="footer__social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="flowing-copyright">
          {splitText("Gajarla Bhagath Chakravorthy")}
        </div>
        <p>&copy; 2024 Gajarla Bhagath Chakravorthy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
