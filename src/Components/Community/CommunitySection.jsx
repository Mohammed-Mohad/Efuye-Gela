import React from "react";
import CommunityIntro from "./CommunityIntro";
import CommunityCards from "./CommunityCards";
import CommunityUpdate from "./CommunityUpdate";

const CommunitySection = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="w-[542px] text-center text-[#4d4d4d] text-3xl font-bold font-['Inter'] leading-[44px] ">
        Manage your entire community in a single system
      </div>
      <div className=" w-full px-36 flex justify-between items-center mt-20">
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
      <CommunityUpdate />
    </div>
  );
};

export default CommunitySection;
