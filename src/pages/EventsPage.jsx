import React, { useEffect } from "react";

// import { getEvents, viewEvent } from "../actions/eventsActions";

import Header from "../components/Nav/Header";
import Responsive from "../components/Nav/Responsive";
import Footer from "../components/Nav/Footer";
import FooterBottom from "../components/Nav/FooterBottom";

function EventsPage() {
  // useEffect(() => {
  //   getEvents();
  // }, [getEvents]);

  // const { events } = eventsData;

  // let eventsDataComponent;

  // if (events) {
  //   eventsDataComponent = events.map((event, i) => (
  //     <div className="col-md-6" key={i}>
  //       <div className="category-box">
  //         <div className="category-block">
  //           <div className="category-img">
  //             <img src={`images/${event.image}`} alt="" />
  //             <ul>
  //               <li className="date">
  //                 <a href="#" title="">
  //                   <i className="fa fa-calendar-o"></i> {event.date}
  //                 </a>
  //               </li>
  //               <li className="time">
  //                 <a href="#" title="">
  //                   <i className="fa fa-clock-o"></i> {event.time}
  //                 </a>
  //               </li>
  //             </ul>
  //           </div>
  //           <h3>{event.title}</h3>
  //           <span>
  //             <i className="fa fa-map-marker"></i> The House of Destiny Church
  //             Kerugoya
  //           </span>
  //           <button
  //             className="button center"
  //             onClick={() => {
  //               viewEvent(event.name, history);
  //             }}
  //           >
  //             Read More
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   ));
  // }

  return (
    <div>
      <Header />
      <Responsive />
      <div className="page-top">
        <div
          className="parallax"
          style={{ background: "url(images/parallax1.jpg)" }}
        ></div>

        <div className="container">
          <h1>
            EVENTS <span>LIST</span>
          </h1>

          <ul>
            <li>
              <a href="/" title="">
                Home
              </a>
            </li>

            <li>
              <a href="/events" title="">
                Our Events
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section>
        <div className="block">
          <div className="container">
            <div className="row">
              <div className="col-md-12 column">
                <div className="events-gridview remove-ext">
                  {/* <div className="row">{eventsDataComponent}</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* <FooterBottom /> */}
    </div>
  );
}

export default EventsPage;
