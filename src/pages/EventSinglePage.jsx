// import React from "react";

// import { Redirect } from "react-router-dom";
// import { useHistory } from "react-router-dom";

// import Header from "../components/Nav/Header";
// import Responsive from "../components/Nav/Responsive";
// import Footer from "../components/Nav/Footer";
// import FooterBottom from "../components/Nav/FooterBottom";

// function EventSinglePage() {
//   const { event } = { title: "niji" };
//   const history = useHistory();

//   if (!event) {
//     history.push("/events");
//   }

//   return (
//     <div>
//       <Header />
//       <Responsive />
//       <div className="page-top">
//         <div
//           className="parallax"
//           style={{ background: "url(images/two.jpg)" }}
//         ></div>

//         <div className="container">
//           <h1>
//             <span>{event.title}</span>
//           </h1>

//           <ul>
//             <li>
//               <a href="/" title="">
//                 Home
//               </a>
//             </li>

//             <li>
//               <a href="/events" title="">
//                 Events
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <section>
//         <div className="block">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-12 column">
//                 <div className="single-page">
//                   <img
//                     style={{ width: "100%", height: 700 }}
//                     src={`images/${event.image}`}
//                     alt=""
//                   />

//                   <div className="meta">
//                     <ul>
//                       <li>
//                         <i className="fa fa-calendar-o"></i> {event.date}
//                       </li>
//                     </ul>
//                   </div>

//                   <div className="event-info">
//                     <div className="col-md-6">
//                       <div className="map">
//                         <iframe
//                           id="gmap_canvas"
//                           src="https://maps.google.com/maps?q=the%20house%20of%20destiny&t=&z=13&ie=UTF8&iwloc=&output=embed"
//                           frameBorder="0"
//                           scrolling="no"
//                           marginHeight="0"
//                           marginWidth="0"
//                         ></iframe>
//                       </div>
//                     </div>

//                     <div className="col-md-6">
//                       <ul>
//                         <li>
//                           <i className="fa fa-map-marker"></i> The House of
//                           Destiny Church
//                         </li>

//                         <li>
//                           <i className="fa fa-clock-o"></i> {event.time}
//                         </li>

//                         <li>
//                           <p>{event.about}</p>
//                         </li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//       <FooterBottom />
//     </div>
//   );
// }

// export default EventSinglePage;
