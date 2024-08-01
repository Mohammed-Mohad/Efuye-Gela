// src/components/BookMeeting.jsx
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="absolute top-[200px] left-[25px] h-[745px] w-[1437px] backdrop-blur-[20px] backdrop-brightness-[100%]" />
      <div className="absolute top-[200px] left-[25px] h-[745px] w-[1437px] backdrop-blur-[20px] backdrop-brightness-[100%]" />
      <div className="absolute top-[480px] left-[142px] flex items-center justify-center gap-[10px] bg-[#fb8815] rounded-[7px] p-[10px] w-[248px] text-white font-[inter] font-bold text-xl ">
        Book a meeting
      </div>
      <div className="absolute h-[270px] left-[88px] top-[322px] w-[596px]">
        <img
          className="absolute h-[91px] left-[-32984px] top-[-11930px] w-[293px]"
          alt="Rectangle"
          src="../src/assets/Images/mt.png"
        />
        <p className="absolute text-[#4d4d4d] font-inter text-[20px] font-medium left-[56px] top-[-10px] w-[538px] tracking-tight leading-normal">
          Efuyegela is a solutions company that employs a variety of resources,
          tools, and frameworks to design and deliver dynamic high-impact
          solutions that cater to specific ecosystems and audiences.
        </p>
      </div>
      <div className="absolute top-[-155.46px] left-[742px] h-[714px] w-[696px]">
        <img
          src="../src/assets/Images/mt.png"
          alt="main image"
          className="absolute h-[560px] w-[562px] left-[54px] top-[253px] object-cover"
        />
      </div>

      <div className="absolute text-[#ffa500] font-itim text-[60px] font-bold left-[148px] tracking-[-1.2px] leading-normal top-[180px] whitespace-nowrap">
        EFUYEGELA
      </div>
      <div className="absolute text-[#fb8815] font-itim text-[60px] font-bold left-[148px] tracking-[-1.2px] leading-normal top-[180px] whitespace-nowrap">
        EFUYEGELA
      </div>
      <p className="absolute text-[#ffa500] font-itim text-[30px] font-normal left-[148px] tracking-normal leading-normal top-[252px] w-[514px]">
        SOME SEE A WEED , SOME SEE A SEED
      </p>
      <p className="absolute text-[#fb8815] font-itim text-[30px] font-normal left-[148px] tracking-normal leading-normal top-[252px] w-[514px]">
        SOME SEE A WEED , SOME SEE A SEED
      </p>
      <img
        className="absolute h-[88px] left-[460px] object-cover top-[164px] w-[117px]"
        alt="Rectangle"
        src="../src/assets/Images/EfuyeLogo.png"
      />
    </div>
  );
};

export default HeroSection;
