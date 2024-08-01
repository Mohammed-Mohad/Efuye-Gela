import React from "react";
import Header from "./Header";
import ClientSection from "./ClientSection";
import CommunitySection from "./CommunitySection";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Offer from "./Offer";
import HeroSection from "./HeroSection";
const Homepage = () => {
  return (
    <div className="bg-white min-h-screen relative w-full overflow-hidden flex flex-col">
      <Header />
      <HeroSection />
    </div>
  );
};

export default Homepage;
