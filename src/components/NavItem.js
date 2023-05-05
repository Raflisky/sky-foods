import React from "react";

const NavItem = ({ children, imgURL }) => {
  return (
    <ul className="flex flex-col p-5 text-gray-800">
      <li className="flex text-xl font-semibold cursor-pointer">
        <img
          src={imgURL}
          alt="menu"
          className="mr-4"
          width="25px"
          height="25px"
        />
        {children}
      </li>
    </ul>
  );
};

export default NavItem;
