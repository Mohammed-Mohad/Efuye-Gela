import React from "react";

const NavLink = ({ children, href = "#" }) => {
  return (
    <div>
      <a
        href={href}
        className="text-[#4d4d4d] mr-5 hover:text-gray-900 cursor-pointer font-['Inter']"
      >
        {children}
      </a>
      
    </div>
  );
};

export default NavLink;
