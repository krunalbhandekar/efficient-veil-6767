import React from "react";
import "./Footer.css";

const Footer = () => {
  const most = [
    "Staples",
    "Beverages",
    "Personal Care",
    "Home Care",
    "Fruits and Vegetables",
    "Baby Care",
    "Snacks & Branded Foods",
    "Dairy & Bakery",
  ];
  const customer = [
    "About Us",
    "FAQ",
    "Terms and conditions",
    "Privacy policy",
    "E-waste Policy",
    "Cancellation and return policy",
  ];
  return (
    <div>
    <footer>
      <div className="footer-container">
        <ul>
          <li>
            <h2>Most Popular Categories</h2>
          </li>
          {most.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
        <ul>
          <li>
            <h2>Customer Services</h2>
          </li>
          {customer.map((e) => {
            return <li>{e}</li>;
          })}
        </ul>
        <div className="subscribe">
          <h2>Contact Us</h2>
          "Whatsapp us : "
          <span className="span">
            <a href="https://wa.me/917000370003?text=Hi" target="blank">
              7000370003
            </a>
          </span>
          <br></br>
          <span>
            <a href="tel:1800 890 1222" target="blank">
              1800 890 1222
            </a>
          </span>
          <br></br>
          <p className="para">8:00 AM to 8:00 PM, 365 days</p>
          <p>
            "Please note that you are accessing the BETA Version of "
            <a href="https://www.jiomart.com/">www.jiomart.com</a>
          </p>
          <p>
            "Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the beta website, please email us on "
            <a href="mailto:cs@jiomart.com" target="blank">cs@jiomart.com</a>
          </p>
          <br/>
          <a className="app" href="https://play.google.com/store/apps/details?id=com.jpl.jiomart" target="blank">
            <img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png" alt="Download Jio Mart App for Android user"/>
          </a>
          <a href="https://apps.apple.com/in/app/jiomart/id1522085683" target="blank">
            <img src="https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png" alt="Download Jio Mart App for IOS user"/>
          </a>
        </div>
      </div>
      <section className="copyrights">
        <div className="copyrights-container">
            <p>Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+, Google Chrome 80+</p>
            <span>© 2022 All rights reserved. Reliance Retail Ltd.</span>
        </div>
      </section>
    </footer>
    </div>
  );
};

export default Footer;
