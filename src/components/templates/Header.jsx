import React from "react";
import { Link } from "react-router-dom";
//1:16:17
const Header = ({ data }) => {
  console.log(data);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path
        })`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start p-[5%]"
    >
      <h1 className="w-[70%] text-5xl font-black text-white">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] text-white mt-2 mb-2">
        {data?.overview?.slice(0, 200)}...
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-400"
        >
          more
        </Link>
      </p>
      <p className="text-white ">
        <i className="text-yellow-500 ri-megaphone-fill"></i>
        {data.release_date || "No information"}
        <i className="ml-3 ri-album-fill text-yellow-500"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link className="p-3 rounded text-white mt-2 bg-[#6556CD]">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
