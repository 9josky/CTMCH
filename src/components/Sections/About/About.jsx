import React from "react";

function About() {
  return (
    <section>
      <div className="block">
        <div className="container">
          <div className="row">
            <div className="title2">
              <h2>
                ABOUT <span>US</span>
              </h2>
            </div>

            <div className="about">
              <div className="col-md-6 column">
                <h4>
                  <i className="fa fa-bank"></i>NEXT ONLINE EXPERIENCE WITH US
                </h4>

                <p>
                  Since its inception in 2013, Christ The Truth Ministries
                  Calvary House has been a vibrant home for its members. At the
                  heart of the ministry is a love for people which is embodied
                  in its vision bearer, Sr. Pastor Lawrence O. Adetunji who has
                  over 20 years’ experience as a pastor. Together with his wife,
                  Pastor Ronke Adetunji, they are dedicated to connecting people
                  to their Destiny in Christ. Located In Maryland, the Sunday
                  Service starts with a prayer session from 9 30am to 10am. It
                  is followed by the main service until 12 noon. You are welcome
                  to come pray, praise, worship and hear the word of God as you
                  experience the love from our church community.
                </p>

                <ul className="nav nav-tabs" id="myTab">
                  <li className="col-md-4 active">
                    <a data-toggle="tab" href="#image1">
                      <img src="images/CTM-Pray.jpg" alt="" height="110px" />
                    </a>
                  </li>

                  <li className="col-md-4">
                    <a
                      data-toggle="tab"
                      href="#image2"
                      // style={{ width: "100px", height: "150px" }}
                    >
                      <img
                        src="images/Ctm-SundaySchool.jpg"
                        alt=""
                        width="200px"
                        height="110px"
                      />
                    </a>
                  </li>

                  <li className="col-md-4">
                    <a data-toggle="tab" href="#image3">
                      <img
                        src="images/CTM-YouthGat.jpg"
                        alt=""
                        height="110px"
                      />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-6 column">
                <div className="tab-content" id="myTabContent">
                  <div id="image1" className="tab-pane fade in active">
                    <img src="images/CTM-Pray.jpg" alt="" />
                  </div>

                  <div id="image2" className="tab-pane fade">
                    <img src="images/Ctm-SundaySchool.jpg" alt="" />
                  </div>

                  <div id="image3" className="tab-pane fade">
                    <img src="images/CTM-YouthGat.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
