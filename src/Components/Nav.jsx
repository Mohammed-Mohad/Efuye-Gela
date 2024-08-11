import React from "react";
import NavLink from "./NavLink";

const Nav = () => {
  return (
    <div className="w-full relative shadow-custom transform-rotate-[-90deg] bg-[#eeeeee]">
      <header className="shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <div className="flex items-center ml-8 mb-4 md:mb-0 md:ml-0">
            <img
              src="../src/assets/Images/EfuyeLogo.png"
              alt=""
              className="w-28 "
            />
          </div>

          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-[43px]">
            <a className="text-[#4d4d4d] mr-5 hover:text-gray-900 font-['Inter] font-bold text-xl cursor-pointer" href="#">
              Home
            </a>
            <NavLink>Philosophy</NavLink>
            <NavLink>Projects</NavLink>
            <NavLink>Community</NavLink>
          </nav>
          <button className="inline-flex items-center bg-[#fb7f04]/95 rounded-[7px] j py-2 px-8  mt-4 md:mt-0">
            <div className="text-white text-xl font-bold font-['Inter'] tracking-tight">
              Contact us
            </div>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Nav;
