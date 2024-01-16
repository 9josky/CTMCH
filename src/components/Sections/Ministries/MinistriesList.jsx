import React, { useEffect } from "react";

import { setMinistries, viewMinistry } from "../../../actions/ministriesAction";

const MinistriesList = ({
  ministriesData,
  setMinistries,
  viewMinistry,
  history,
}) => {
  useEffect(() => {
    setMinistries();
  }, [setMinistries]);

  const { ministries } = ministriesData;
  let ministriesDataContent;

  if (ministries) {
    ministriesDataContent = ministries.map((ministry, i) => (
      <div className="col-md-6 column" key={i}>
        <div className="service-block">
          <div className="service-image">
            <img src={`images/${ministry.image}`} alt="" />
            <i className="fa fa-codepen"></i>
          </div>

          <h3>{ministry.name}</h3>
          <p>{ministry.preview}</p>

          <button
            className="button center"
            onClick={() => {
              viewMinistry(ministry.name, history);
            }}
          >
            Read More
          </button>
        </div>
      </div>
    ));
  }

  return (
    <div>
      <section>
        <div className="block">
          <div className="container">
            <div className="row">
              <div className="col-md-12 column">
                <div className="row">
                  <div className="service-listing center">
                    {ministriesDataContent}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MinistriesList;
