import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import MinistriesListPage from "./pages/MinistriesListPage";
// import SingleMinistryPage from "./pages/SingleMinistryPage";
import ProgramsPage from "./pages/ProgramsPage";
import EventsPage from "./pages/EventsPage";
// import EventSingePage from "./pages/EventSinglePage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
// import LivePage from "./pages/LivePage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/ministries" element={<MinistriesListPage />} />
          {/* <Route exact path="/single-ministry" element={<SingleMinistryPage />} /> */}
          <Route exact path="/programs" element={<ProgramsPage />} />
          <Route exact path="/events" element={<EventsPage />} />
          {/* <Route exact path="/event-single" element={<EventSingePage />} /> */}
          <Route exact path="/gallery" element={<GalleryPage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          {/* <Route exact path="/online" element={<LivePage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
