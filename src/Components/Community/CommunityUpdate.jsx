import React from "react";
import CommunityUpdateCards from "./CommunityUpdateCards";

const CommunityUpdate = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 px-4 mt-20">
      <div className=" flex-col justify-start items-center gap-2 inline-flex">
        <div className="self-stretch text-center text-[#4d4d4d] text-4xl font-semibold font-['Inter'] leading-[44px]">
          Caring is the new marketing
        </div>
        <div className="w-[628px] text-center text-[#717171] text-base font-normal font-['Inter'] leading-normal">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </div>
      </div>
      <div className="w-full flex justify-center mt-20">
        <div className="flex flex-wrap justify-center gap-4 max-w-screen-xl">
          <CommunityUpdateCards img="../src/assets/Images/pcMan.jpeg" text="Creating Streamlined Safeguarding Processes with OneRen"/>
          <CommunityUpdateCards img="../src/assets/Images/pc.jpeg" text="What are your safeguarding responsibilities and how can you manage them?"/>
          <CommunityUpdateCards img="../src/assets/Images/pc1.jpeg" text="Revamping the Membership Model with Triathlon Australia"/>
        </div>
      </div>
    </div>
  );
};

export default CommunityUpdate;
