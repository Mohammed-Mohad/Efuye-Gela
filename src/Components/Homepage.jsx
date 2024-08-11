import React from "react";
import Nav from "./Nav";
import ClientSection from "./ClientSection";
import CommunitySection from "./Community/CommunitySection";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import Offer from "./Offer";
import HeroSection from "./HeroSection";
const Homepage = () => {
  return (
    <div className="bg-white min-h-screen relative w-full overflow-hidden flex flex-col">
      <Nav />
      <HeroSection />
      <ClientSection />
      <Offer />
      <CommunitySection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Homepage;
