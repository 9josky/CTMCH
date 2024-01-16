import React, { useState } from "react";
import { Link } from "react-router-dom";

function Responsive() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("clicked");
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="responsive-header">
        <div className="responsive-contact">
          <span>
            <p className="responsive-phone">
              <i className="fa fa-phone"></i> Call: +1 301-262-2120
            </p>
            <p className="responsive-mail">
              <i className="fa fa-envelope"></i>{" "}
              ctmcalvaryhousebowie@outlook.com
            </p>
          </span>
          <a className="phone-btn active" href="#" title="">
            <i className="fa fa-phone"></i>
          </a>
          <a className="mail-btn" href="#" title="">
            <i className="fa fa-envelope"></i>
          </a>
        </div>
        <div className="responsive-extras">
          <div className="responsive-social">
            <a href="#" title="">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#" title="">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#" title="">
              <i className="fa fa-google-plus"></i>
            </a>
            <a href="#" title="">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div
          className="responisve-bar"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className={`responsive-logo ${isMenuOpen ? "menu-open" : ""}`}>
            <Link to="/" title="">
              <img
                src="/images/CTM-Church-bg.png"
                alt="The the house of destiny church logo"
              />
            </Link>
          </div>
          <span className="responsive-btn" onClick={toggleMenu}>
            <i className="fa fa-list"></i>
          </span>
        </div>
      </div>
      <div className={`responsive-menu ${isMenuOpen ? "show-menu" : ""}`}>
        <ul style={{ listStyle: "none", paddingTop: "70px" }}>
          <li>
            <Link to="/" title="">
              Home
            </Link>
          </li>
          <li>
            <Link to="/ministries" title="">
              Our Ministries
            </Link>
          </li>
          <li>
            <Link to="/programs" title="">
              Our Programs
            </Link>
          </li>
          <li>
            <Link to="/events" title="">
              Events
            </Link>
          </li>
          <li>
            <Link to="/gallery" title="">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/about" title="">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" title="">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Responsive;
