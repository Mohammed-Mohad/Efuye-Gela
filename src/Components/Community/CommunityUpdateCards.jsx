import React from 'react';

const CommunityUpdateCards = ({ img, text }) => {
  return (
    <div className="flex flex-col items-center flex-none w-[368px]">
      <img
        src={img}
        className="w-[368px] h-[286px] rounded-lg object-cover"
        alt="Community Update"
      />
      <div className="relative flex flex-col items-center gap-4 mt-[-96px] p-4 bg-[#f5f5f5] rounded-lg shadow-lg">
        <div className="w-[285px] text-center text-[#717171] text-xl font-semibold font-['Inter'] leading-7">
          {text}
        </div>
        <div className="h-11 p-2 flex justify-center items-center gap-2">
          <div className="text-[#fb8815] text-xl font-semibold font-['Inter'] leading-7">
            Readmore
          </div>
          <img src="../src/assets/Images/Right.svg" alt="Readmore" />
        </div>
      </div>
    </div>
  );
};

export default CommunityUpdateCards;
