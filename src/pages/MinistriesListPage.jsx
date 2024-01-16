import React, { Component } from "react";

import MinistriesList from "../components/Sections/Ministries/MinistriesList";
import Header from "../components/Nav/Header";
import Responsive from "../components/Nav/Responsive";
import Footer from "../components/Nav/Footer";
import FooterBottom from "../components/Nav/FooterBottom";

function Ministries() {
  return (
    <div>
      <Header />
      <Responsive />
      <div className="page-top">
        <div
          className="parallax"
          style={{ background: "url(images/two.jpg)" }}
        ></div>

        <div className="container">
          <h1>
            MINISTRIES <span>LIST</span>
          </h1>

          <ul>
            <li>
              <a href="/" title="">
                Home
              </a>
            </li>

            <li>
              <a href="/ministries" title="">
                Ministries List
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <MinistriesList /> */}
      <Footer />
      {/* <FooterBottom /> */}
    </div>
  );
}

export default Ministries;
