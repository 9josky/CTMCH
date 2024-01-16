import React from "react";

function Mission() {
  return (
    <div>
      <section>
        <div className="block whitish">
          <div
            className="parallax"
            style={{
              background: "url(images/resource/next-steps-header-bg.jpg)",
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12 column">
                <div className="welcome">
                  <h3>
                    <i className="fa fa-church"></i>OUR MISSION
                  </h3>
                  <p>Connecting People To Their DESTINY in CHRIST</p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 column">
                <div className="welcome">
                  <h3>
                    <i className="fa fa-church"></i>OUR VISION
                  </h3>
                  <p>
                    Relevant Relentless Church That Worship CHRIST In SPIRIT And
                    In Truth
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 column">
                <div className="welcome">
                  <h3>
                    <i className="fa fa-church"></i>OUR CORE VALUES
                  </h3>
                  <p>
                    People Centered<br></br>Teamwork<br></br>Transparency
                    <br></br>Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="block blackish">
          <div
            className="parallax"
            style={{ background: "url(images/two.jpg)" }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="parallax-title">
                  <h3 className="special-text">
                    REACH <span>OUT</span>
                  </h3>
                  <p>
                    Don't suffer in silence <br /> The house of Destiny Church
                    Team is here for you.
                  </p>
                </div>
                <a href="mailto:hello@houseofdestiny.or.ke">
                  <div className="prayer-request">
                    <input type="submit" value="Reach Out" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mission;
