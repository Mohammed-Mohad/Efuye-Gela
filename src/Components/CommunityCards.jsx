import React from "react";

const CommunityCards = ({ title, text }) => {
  return (
    <div className="w-[299px] px-8 py-6 bg-white rounded-lg shadow flex-col justify-start items-center gap-2 inline-flex">
      <div className="h-[72px] flex-col justify-start items-center gap-4 flex">
        <div className="self-stretch text-center text-[#4d4d4d] text-[28px] font-bold font-['Inter'] leading-9">
          {title}
        </div>
      </div>
      <div className="justify-start items-start gap-2 inline-flex">
        <div className="w-60 text-center">
          <span className="text-[#717171] text-sm font-normal font-['Inter'] leading-tight">
            {text}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommunityCards;
