import React from "react";
import CommunityIntro from "./CommunityIntro";
import CommunityCards from "./CommunityCards";
import CommunityUpdate from "./CommunityUpdate";

const CommunitySection = () => {
  return (
    <div className="absolute top-[1530px] left-0 w-[1444px] h-[1544px] mb-0 flex-grow">
      <CommunityIntro />
      <div className="absolute left-0 top-[200px] h-[228px] w-[1440px] px-36 flex justify-between items-center">
        <CommunityCards
          title="Human-Centered Design"
          text="We prioritize understanding and addressing the needs of the communities we serve."
        />
        <CommunityCards
          title="Community Empowerment"
          text="We aim to equip communities with the resources, knowledge, and skills necessary to thrive and solve their own challenges."
        />
        <CommunityCards
          title="Playful Engagement"
          text="We incorporate game thinking, playful design, and interactive experiences to foster joyful participation and deeper engagement within communities."
        />
      </div>
      {/* <Testimonials />   */}
      <CommunityUpdate />
    </div>
  );
};

export default CommunitySection;
