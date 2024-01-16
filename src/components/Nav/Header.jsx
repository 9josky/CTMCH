import React, { Component } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="header2">
        <div className="topbar">
          <div className="container">
            <div className="header-timer">
              <p>Youth Connect</p>
              <ul className="headercounter">
                <li>
                  {" "}
                  <span>Every Thursday</span>
                  <p>6:00 P.M To 7:30 P.M</p>
                </li>
              </ul>
            </div>
            <p>
              <i className="fa fa-mobile"></i> Call: +1 301-262-2120
            </p>

            <p>
              <i className="fa fa-envelope"></i>{" "}
              ctmcalvaryhousebowie@outlook.com
            </p>

            <ul className="social-media">
              <li>
                <a
                  title="Christ The Truth Ministries Calvary House"
                  href="https://web.facebook.com/ChristTheTruthMinistries"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
            </ul>
            <div className="cart-dropdown">
              <p>
                <i className="fa fa-list"></i> <span>Services</span>
              </p>
              <ul>
                <li className="item-number">
                  Main Service - Sundays 9:00 AM to 12:00 PM
                </li>
                <li className="item-number">
                  Prayers - Tuesdays 6:00 PM to 7:30 PM
                </li>
                <li className="item-number">
                  Praise And Worship Training - Mondays, Wednesdays and Fridays
                  from 7:30 PM
                </li>
                <li className="item-number">
                  Youth Connect - Thursdays 6:00 PM to 7:30 PM
                </li>
              </ul>
            </div>
          </div>
        </div>

        <nav className="style1">
          <div className="container">
            <div className="logo">
              <Link to="/" title="Christ The Truth Ministries Calvary House">
                <img src="/images/CTM-Church-bg.png" alt="" />
              </Link>
            </div>

            <ul>
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
        </nav>
      </header>
    </div>
  );
}

export default Header;
