import React from "react";

const HeroSection = () => {
  return (
    <div className="shadow-custom transform-rotate-[-90deg] bg-[#eeeeee]">
      <section className="container mx-auto flex px-5 py-20 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mt-[-150px]">
          <div className="flex flex-col">
            <div className="flex items-center ">
              <div className=" z-10 text-[#fb8815] font-itim text-6xl font-normal  tracking-[-1.2px] leading-normal  whitespace-nowrap ">
                EFUYEGELA
              </div>
              <img
                className="object-cover w-[117px] ml-[-5px] mb-14"
                alt="Rectangle"
                src="../src/assets/Images/EfuyeLogo.png"
              />
            </div>

            <p className="text-[#ffa500] font-itim text-2xl font-medium tracking-normal leading-normal w-full mt-[-50px]">
              SOME SEE A WEED , SOME SEE A SEED
            </p>
          </div>
          <div className="flex flex-col justify-center ">
            <p className=" text-[#4d4d4d] font-['Inter'] text-xl font-medium tracking-tight leading-normal py-8 my-2 ">
              Efuyegela is a solutions company that employs a variety of
              resources, tools, and frameworks to design and deliver dynamic
              high-impact solutions that cater to specific ecosystems and
              audiences.
            </p>
            <div className="flex items-center justify-center gap-[10px] bg-[#fb8815] rounded-[7px] p-[10px] w-[248px] text-white font-['Inter'] font-bold text-xl cursor-pointer">
              Book a meeting
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-[-80px]">
          <img
            src="../src/assets/Images/mt.png"
            alt=""
            className="object-cover rounded"
          />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
