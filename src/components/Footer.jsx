import React from 'react'
import { FaFacebook ,FaInstagram,FaTwitter} from "react-icons/fa";

export default function Footer() {
  return (
    <footer id="footer">  
      <div className="container">
        <div className="footer-row">
          
          <div className="col">
            <h2>Get In Touch</h2>
            <p> Lorem ipsum dolor sit amet. </p>
            <div className="social-icons">
              <i href="#"><FaFacebook /></i>
              <i href="#"> <FaInstagram /> </i>
              <i href="#"> <FaTwitter />  </i>
            </div>
          </div>
          
          <div className="col"> 
          <h2>Company info</h2>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="col">
          <h2>Features</h2>
          <ul>
              <li>Business Marketing</li>
              <li>User Analytic</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          <div className="col">
          <h2>Resources</h2>
          <ul>
              <li>IOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

        </div>
        <div className="copyright">
          <p>&copy; 2025 | EduBridge All rights reserved made by {"  "}
          <a href="https://www.linkedin.com/in/abdellateef-hammoud-56451a2bb/" target="_blank" 
          rel="noopener noreferrer"> <strong className='text-primary' > Abdellateef Hammoud </strong> </a></p> 
          
        </div>
      </div>
    </footer>
  );
}