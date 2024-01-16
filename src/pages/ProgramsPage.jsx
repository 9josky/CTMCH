import React, { Component } from "react";

import Header from "../components/Nav/Header";
import Responsive from "../components/Nav/Responsive";
import Footer from "../components/Nav/Footer";
import FooterBottom from "../components/Nav/FooterBottom";

function ProgramsPage() {
  return (
    <div>
      <Header />
      <Responsive />

      <div className="page-top">
        <div
          className="parallax"
          style={{ background: "url(images/six.jpg)" }}
        ></div>

        <div className="container">
          <h1>
            PROGRAMS <span>LIST</span>
          </h1>

          <ul>
            <li>
              <a href="/" title="">
                Home
              </a>
            </li>

            <li>
              <a href="/programs" title="">
                Our Programs
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section>
        {/* <div className="block">
          <div className="container">
            <div className="row">
              <div className="col-md-12 column">
                <div className="remove-ext">
                  <div className="blog-post">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="image">
                          <img src="images/one.jpg" alt="" />
                        </div>
                      </div>

                      <div className="col-md-7">
                        <div className="blog-detail">
                          <h3>LIFE GROUPS</h3>

                          <p>
                            The House of Destiny church disciples in various
                            locations in Kerugoya. The life groups are held in
                            different days of the week according to each
                            location. They are open to non-members as well.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="blog-post">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="blog-detail">
                          <h3>PRAYER FEST</h3>

                          <p>
                            Every last Friday of the month, we welcome you to a
                            night of prayers from 7pm to 10pm. The service is a
                            forum to encounter the Holy Spirit as you take your
                            petitions to God. You are welcome to join us as you
                            expect from the Lord.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="image">
                          <img src="images/two.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="blog-post">
                    <div className="row">
                      <div className="col-md-5">
                        <div className="image">
                          <img src="images/three.jpg" alt="" />
                        </div>
                      </div>

                      <div className="col-md-7">
                        <div className="blog-detail">
                          <h3>MIZIZI</h3>

                          <p>
                            The 10-week program is mostly recommended for new
                            believers. As the name indicates, it gives
                            ‘spiritual roots’ as participants embark on a
                            journey to having an intimate relationship with God.
                            The program has been introduced in various churches
                            across Kenya as well as other institutions such as
                            Kerugoya Prison.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="blog-post">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="blog-detail">
                          <h3>HOSPITAL</h3>

                          <p>
                            We minister at Kerugoya Medical Hospital and Kimathi
                            Medical Hospital at least three times a day. We pray
                            with patients as we comfort and give them hope and
                            encouragement in our Lord Jesus.
                          </p>
                        </div>
                      </div>

                      <div className="col-md-5">
                        <div className="image">
                          <img src="images/four.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      <Footer />
      {/* <FooterBottom /> */}
    </div>
  );
}

export default ProgramsPage;
