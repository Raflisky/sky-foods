import React, { useState } from "react";
import NavItem from "./NavItem";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center px-5 py-7">
      <div className="flex items-center">
        <div className="cursor-pointer" onClick={() => setNav(!nav)}>
          <img
            src="/menu.svg"
            alt="menu"
            className=""
            width="30px"
            height="30px"
          />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Sky <span className="font-bold">Foods</span>
        </h1>
        <div className="hidden lg:flex items-center rounded-full bg-gray-200 p-1 text-[14px]">
          <p
            className="text-white bg-black rounded-full p-2
          "
          >
            Delivery
          </p>
          <p className="">Pickup</p>
        </div>
      </div>

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg-[500px] ">
        <img src="/search.svg" alt="search" className="" />
        <input
          type="text"
          name="search"
          placeholder="Search Foods"
          className="bg-transparent p-2 w-full focus:outline-none"
        />
      </div>
      <button
        type=""
        className="bg-black text-white hidden rounded-full hover:bg-opacity-75 md:flex items-center py-2 px-5"
      >
        <img src="/cart.svg" alt="" className="mr-2" />
        Cart
      </button>

      {/* Mobile Menu */}

      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0 "></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0 h-screen w-[300px] bg-white z-10 duration-500"
            : "fixed top-0 left-[-100%] h-screen w-[300px] bg-white z-10 duration-500 transition-all"
        }
      >
        <img
          onClick={() => setNav(!nav)}
          width="30px"
          height="30px"
          src="/x.svg"
          alt="menu-x"
          className="right-4 top-4 absolute cursor-pointer"
        />
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-4 absolute top-2">
          Sky <span className="font-bold">Foods</span>
        </h1>
        <nav className="pt-16">
          <NavItem children="Orders" imgURL="/order.svg" />
          <NavItem children="Favorites" imgURL="/star.svg" />
          <NavItem children="Wallet" imgURL="/wallet.svg" />
          <NavItem children="Help" imgURL="/help.svg" />
          <NavItem children="Promotions" imgURL="/promotion.svg" />
          <NavItem children="Best One" imgURL="/best-one.svg" />
          <NavItem children="Invite Friends" imgURL="/order.svg" />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
