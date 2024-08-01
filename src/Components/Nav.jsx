import React from "react";

const Nav = () => {
  return (
    <div className="relative flex justify-center items-center p-4 shadow w-full h-[98px] bg-white">
      <div className="w-[203.13px] h-11 p-2.5 left-[1140.20px] top-[30px] absolute bg-[#fb7f04]/95 rounded-[7px] justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-xl font-bold font-['Inter'] tracking-tight">
          Contact us
        </div>
      </div>
      <div className="w-[177px] h-[px] left-[94px] top-[22px] absolute bg-white flex-col justify-start items-start gap-2.5 inline-flex">
        <img
          src="../src/assets/Images/EfuyeLogo.png"
          alt="Efuye gela log"
          className="w-[117px] h-[88px] left-[90px] top-[-20px] absolute"
        />
        {/* <div className="w-[200px] text-[#fb8815] text-[35px] font-normal font-['Itim']">
         
        </div> */}
      </div>
      <div className="left-[490px] top-[38px] absolute justify-start items-center gap-[43px] inline-flex">
        <div className="text-[#4d4d4d] text-xl font-bold font-['Inter']">
          Home
        </div>
        <div className="text-[#4d4d4d] text-lg font-medium font-['Inter']">
          Philosophy
        </div>
        <div className="text-[#4d4d4d] text-lg font-medium font-['Inter']">
          Services
        </div>
        <div className="text-[#4d4d4d] text-lg font-medium font-['Inter']">
          Community
        </div>
      </div>
    </div>
  );
};

export default Nav;
