import React from "react";
import '../assets/styles/Footer.scss'

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="footer-content">
        <p> © {currentYear} Beka Enukidze. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;