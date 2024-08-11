import React from "react";

const Footer = () => {
  return (
    <div className="h-[280.67px] px-[165px] py-16 bg-[#263238] justify-start items-start gap-[125px] inline-flex mt-20">
      <div className="flex-col justify-end items-start gap-10 inline-flex">
        <div className="self-stretch flex-col justify-start items-center gap-2 inline-flex">
          <div className="w-[350px] text-[#f5f7f9] text-sm font-normal font-['Inter'] leading-tight">
            <div className="w-[276px] h-[64.08px] relative">
              <div className="left-0 top-[16.08px] absolute text-[#fb8815] text-[40.19px] font-normal font-['Itim'] mt-[-10px]">
                EFUYEGELA
              </div>
              <img
                className="w-[78.38px] h-[58.95px] left-[197.62px] top-[-0px] absolute mt-[-10px]"
                src="../src/assets/Images/EfuyeLogo.png"
              />
            </div>
            Copyright © 2024 EFUYEGELA Inc.
          </div>
          <div className="w-[350px] text-[#f5f7f9] text-sm font-normal font-['Inter'] leading-tight">
            All rights reserved
          </div>
        </div>
        <div className="self-stretch justify-start items-start gap-2 inline-flex ml-[-10px]">
          <div className=" h-8 relative" />
          <img src="../src/assets/Images/twitter.svg" alt="twitter Logo" />
          <img src="../src/assets/Images/LinkedIn.png" alt="LinkedIn Logo" />
        </div>
      </div>
      <div className="justify-start items-start gap-[30px] flex">
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="w-40 text-white text-xl font-semibold font-['Inter'] leading-7">
            Company
          </div>
          <div className="flex-col justify-start items-start gap-3 flex">
            <div className="w-40 text-[#f5f7f9] text-sm font-normal font-['Inter'] leading-tight">
              About us
            </div>
            <div className="w-40 text-[#f5f7f9] text-sm font-normal font-['Inter'] leading-tight">
              Blog
            </div>
            <div className="w-40 text-[#f5f7f9] text-sm font-normal font-['Inter'] leading-tight">
              Contact us
            </div>
            <div className="w-40 text-[#f5f7f9] text-sm font-normal font-['Inter'] leading-tight">
              Testimonials
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="w-40 text-white text-xl font-semibold font-['Inter'] leading-7">
            Support
          </div>
          <div className="flex-col justify-start items-start gap-3 flex">
            <div className="w-40 text-[#f5f7f9] text-sm font-normal font-['Inter'] leading-tight">
              Help center
            </div>
            <div className="w-40 text-[#f5f7f9] text-sm font-normal font-['Inter'] leading-tight">
              Terms of service
            </div>
            <div className="w-40 text-[#f5f7f9] text-sm font-normal font-['Inter'] leading-tight">
              Legal
            </div>
            <div className="w-40 text-[#f5f7f9] text-sm font-normal font-['Inter'] leading-tight">
              Privacy policy
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 inline-flex">
          <div className="w-40 text-white text-xl font-semibold font-['Inter'] leading-7">
            Stay up to date
          </div>
          <div className="w-[255px] h-10 relative">
            <div className="w-[255px] h-10 left-0 top-0 absolute opacity-20 bg-white rounded-lg" />
            <div className="w-[18px] h-[18px] left-[225px] top-[11px] absolute" />
            <div className="left-[12px] top-[9px] absolute text-[#d9dbe1] text-sm font-normal font-['Inter'] leading-tight">
              Your email address
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
