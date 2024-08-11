import React from "react";

const ClientSection = () => {
  return (
    <div className="flex flex-col items-center gap-[16px] left-0  px-auto w-[1440px] mt-20">
      <div className="h-[76px] flex-col justify-start items-center gap-2 flex">
        <div className="self-stretch text-center text-[#4d4d4d] text-4xl font-semibold font-['Inter'] leading-[44px]">
          Our Clients
        </div>
        <div className="self-stretch text-center text-[#717171] text-base font-normal font-['Inter'] leading-normal">
          We have had the pleasure of working with....
        </div>
      </div>
      <div className="h-[184px] justify-start items-center gap-11 inline-flex">
        <img
          className="w-[217px] h-[106.11px]"
          src="../src/assets/Images/britsh.png"
        />
        <img
          className="w-[155px] h-[72.57px]"
          src="../src/assets/Images/go.png"
        />
        <img
          className="w-[114px] h-[76.13px]"
          src="../src/assets/Images/undb.jpeg"
        />
        <img
          className="w-[287px] h-[82px]"
          src="../src/assets/Images/iceaddis.png"
        />
        <img
          className="w-[204px] h-[114.44px]"
          src="../src/assets/Images/german.png"
        />
        <img
          className="w-[230px] h-[184px]"
          src="../src/assets/Images/giz.png"
        />
      </div>
      {/* <div className="self-stretch h-[98px] justify-between items-center inline-flex">
        <div className="w-12 h-12 p-1 rounded-lg justify-center items-center flex">
          <div className="w-10 h-10  flex-col justify-start items-start flex" />
          <img src="../src/assets/Images/Logo.svg" alt="client Logo" />
        </div>
        <div className="w-12 h-12 px-1 pt-[9.85px] pb-[10.15px] rounded-lg justify-center items-center flex">
          <div className="w-10 h-7 flex-col justify-start items-start flex" />
          <img src="../src/assets/Images/undb.jpeg" alt="client Logo" />
        </div>
        <div className="w-12 h-12 pt-[8.85px] pb-[9.15px] rounded-lg justify-center items-center flex">
          <div className="w-[55px] h-[30px] flex-col justify-start items-start flex" />
          <img src="../src/assets/Images/Logo(2).svg" alt="client Logo" />
        </div>
        <div className="w-12 h-12 pl-px pt-[9.85px] pb-[9.15px] rounded-lg justify-center items-center flex">
          <div className="w-[47px] h-[29px] flex-col justify-start items-start flex" />
          <img src="../src/assets/Images/Logo(3).svg" alt="client Logo" />
        </div>
        <div className="w-12 h-12 pl-1 pr-[3px] pt-[10.85px] pb-[10.15px] rounded-lg justify-center items-center flex">
          <div className="w-[41px] h-[27px] flex-col justify-start items-start flex" />
          <img src="../src/assets/Images/Logo(4).svg" alt="client Logo" />
        </div>
        <div className="w-12 h-12 pt-[13.85px] pb-[14.15px] rounded-lg justify-center items-center flex">
          <div className="w-[52px] h-5 flex-col justify-start items-start flex" />
          <img src="../src/assets/Images/Logo(5).svg" alt="client Logo" />
        </div>
        <div className="w-12 h-12 pt-[8.85px] pb-[9.15px] rounded-lg justify-center items-center flex">
          <div className="w-[55px] h-[30px] flex-col justify-start items-start flex" />
          <img src="../src/assets/Images/Logo(2).svg" alt="client Logo" />
        </div>
      </div> */}
    </div>
  );
};

export default ClientSection;
