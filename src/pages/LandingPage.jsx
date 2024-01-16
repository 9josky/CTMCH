import React from "react";
import Header from "../components/Nav/Header";
import Responsive from "../components/Nav/Responsive";
import Slider from "../components/Slider/Slider";
import About from "../components/Sections/About/About";
import Mission from "../components/Sections/Mission/Mission";
import Footer from "../components/Nav/Footer";
import FooterBottom from "../components/Nav/FooterBottom";

function LandingPage() {
  return (
    <div>
      <Header />
      <Responsive />
      <Slider />
      <About />
      <Mission />
      <Footer />
      {/* <FooterBottom /> */}
    </div>
  );
}

export default LandingPage;
