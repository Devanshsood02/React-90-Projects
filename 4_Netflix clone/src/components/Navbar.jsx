import React from "react";
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <nav className=" w-full bg-green-600  h-14 flex  justify-between position:fixed text-xl p-7 text-[#e5e5e5] bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_10%,transparent)] z-1 font-poppins">
      <div className="left  flex items-center gap-12">
        <figure className="w-20">
          <img src={logo} alt="" />
        </figure>

        <ul className="flex list:none gap-9 text-sm cursor-pointer">
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New& Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>

      <div className="right flex gap-7 items-center text-m">
        <figure>
          <img src={search_icon} alt="" />
        </figure>
        <p>children</p>
        <figure>
          <img src={bell_icon} alt="" />
        </figure>

        <div className="navbar-profile flex items-center w-29 gap-2 cursor-pointer position:relative  ">
          <figure>
            <img src={profile_img} alt="" />
          </figure>
          <figure>
            <img src={caret_icon} alt="" />
          </figure>

         <div className="absolute top-full right-0 w-max bg-[#191919] px-[22px] py-[18px] rounded-[2px] underline z-1">
            <p className="text-xl cursor-pointer">Sign out of Netflix</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
