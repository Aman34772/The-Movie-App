import React, { useEffect } from "react";
import {  NavLink } from "react-router-dom";

const Sidenav = () => {
  
  return (
    <div className="w-[20%] h-full  border-r-2 border-zinc-400 pl-5 pr-5 pt-2 pb-10">
      <h1 className="text-2xl pt-2 text-white font-bold ">
        <i className="text-[#6556CD] ri-tv-fill mr-2 "></i>
        <span className="">SCSDB.</span>
      </h1>
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-5 ">
          New Feeds
        </h1>
        <NavLink  className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 pl-5 pr-5 pt-2 pb-2" to={"/trending"}> <i className="ri-fire-fill"></i>Trending</NavLink>
        <NavLink className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 pl-5 pr-5 pt-2 pb-2" to={"/popular"}><i className="ri-bard-fill"></i> Popular</NavLink>
        <NavLink className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 pl-5 pr-5 pt-2 pb-2" to={"/movies"}><i className="ri-movie-2-fill"></i> Movies</NavLink>
        <NavLink  className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 pl-5 pr-5 pt-2 pb-2" to={"/tvshows"}><i className="mr-1 ri-tv-2-line"></i>Tv Shows</NavLink>
        <NavLink className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 pl-5 pr-5 pt-2 pb-2 mb-5" to={"/people"}><i className="ri-team-line"></i> People</NavLink>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400" />
      <nav className="flex flex-col text-zinc-400 text-xl gap-3">
        <h1 className="text-white font-semibold text-xl mt-5 mb-2">
          Website Information
        </h1>
        <NavLink className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 pl-5 pr-5 pt-2 pb-2" to={"/"}> <i className="mr-1 ri-information-fill"></i>About SCSDB</NavLink>
        <NavLink className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 pl-5 pr-5 pt-2 pb-2" to={"/"}> <i className="mr-1 ri-phone-fill"></i>Contact Us</NavLink>
        
      </nav>
    </div>
  );
};

export default Sidenav;
