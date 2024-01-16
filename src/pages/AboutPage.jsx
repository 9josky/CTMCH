import React, { Component } from "react";

import Header from "../components/Nav/Header";
import Responsive from "../components/Nav/Responsive";
import Footer from "../components/Nav/Footer";
import FooterBottom from "../components/Nav/FooterBottom";

function AboutPage() {
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
            ABOUT <span>US</span>
          </h1>

          <ul>
            <li>
              <a href="/" title="">
                Home
              </a>
            </li>

            <li>
              <a href="/gallery" title="">
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section>
        <div className="block">
          <div className="container">
            <div className="row">
              <div className="col-md-6 column">
                <div className="simple-text">
                  <h3>MORE ABOUT US</h3>

                  <p>
                    Located along the Kutus – Kerugoya highway next to Facing
                    Mt. Kenya Boys, the Sunday Service starts with a prayer
                    session from 9 30am to 10am. It is followed by the main
                    service until 12 noon. You are welcome to come pray, praise,
                    worship and hear the word of God as you experience the love
                    from our church community.
                  </p>
                </div>
              </div>

              <div className="col-md-6 column">
                <div className="video">
                  <div className="video-img lightbox">
                    <img src="images/CTM-Intro.jpg" alt="" />

                    <a
                      href="https://web.facebook.com/watch/?v=1719108735261801"
                      title=""
                      data-poptrox="vimeo"
                    >
                      <i className="fa fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
          <div className="block">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="title">
                    <h2>
                      MEET <span>OUR STAFF</span>
                    </h2>
                  </div>

                  <div className="row">
                    <div className="team-carousel">
                      <div className="member">
                        <div className="team">
                          <div className="team-img">
                            <img src="images/resource/team1.jpg" alt="" />
                          </div>

                          <div className="member-detail">
                            <h3>PASTOR FRANK MBUGUA</h3>

                            <span>SENIOR PASTOR</span>
                            <p>
                              Lorem ipsum dolor sit a onsec tetiri adien tashn
                              commodo leg tashn dol tashin tyons piscin.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="member">
                        <div className="team">
                          <div className="team-img">
                            <img src="images/resource/team2.jpg" alt="" />
                          </div>

                          <div className="member-detail">
                            <h3>PASTOR CAROL FRANK</h3>

                            <span>SENIOR PASTOR</span>
                            <p>
                              Lorem ipsum dolor sit a onsec tetiri adien tashn
                              commodo leg tashn dol tashin tyons piscin.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="member">
                        <div className="team">
                          <div className="team-img">
                            <img src="images/resource/team3.jpg" alt="" />
                          </div>

                          <div className="member-detail">
                            <h3>PASTOR ELIUD MBUGUA</h3>

                            <span>SENIOR PASTOR</span>
                            <p>
                              Lorem ipsum dolor sit a onsec tetiri adien tashn
                              commodo leg tashn dol tashin tyons piscin.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="member">
                        <div className="team">
                          <div className="team-img">
                            <img src="images/resource/team4.jpg" alt="" />
                          </div>

                          <div className="member-detail">
                            <h3>PASTOR MRS MBUGUA</h3>

                            <span>SENIOR PASTOR</span>
                            <p>
                              Lorem ipsum dolor sit a onsec tetiri adien tashn
                              commodo leg tashn dol tashin tyons piscin.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="member">
                        <div className="team">
                          <div className="team-img">
                            <img src="images/resource/team5.jpg" alt="" />
                          </div>

                          <div className="member-detail">
                            <h3>PASROR MAUNDU</h3>

                            <span>SENIOR PASTOR</span>
                            <p>
                              Lorem ipsum dolor sit a onsec tetiri adien tashn
                              commodo leg tashn dol tashin tyons piscin.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="member">
                        <div className="team">
                          <div className="team-img">
                            <img src="images/resource/team6.jpg" alt="" />
                          </div>

                          <div className="member-detail">
                            <h3>PASTOR ANN MAUNDU</h3>

                            <span>SENIOR PASTOR</span>
                            <p>
                              Lorem ipsum dolor sit a onsec tetiri adien tashn
                              commodo leg tashn dol tashin tyons piscin.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      <Footer />
      {/* <FooterBottom /> */}
    </div>
  );
}

export default AboutPage;
