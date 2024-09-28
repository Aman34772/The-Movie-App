import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import noimage from "/noimage.png";
const Topnav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);
  // console.log(query);
  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log("Error : ", error);
    }
  };
  useEffect(() => {
    GetSearches();
  }, [query]);
  return (
    <div className="w-[80%] mx-auto h-[10vh] relative flex   items-center">
      <i className=" text-zinc-200 text-3xl ri-search-line"></i>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="w-[50%] mx-10 p-5 text-xl outline-none border-none bg-transparent text-zinc-200"
        type="text"
        placeholder="search anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setQuery("")}
          className="right-0 text-zinc-200 text-3xl  ri-close-fill"
        ></i>
      )}
      <div className="z-[100] absolute top-[100%] left-[5%] w-[67%] max-h-[50vh] bg-zinc-100 overflow-auto">
        {searches.map((s, i) => (
          <Link
            key={i}
            className="text-zinc-600 hover:text-black hover:bg-zinc-300 duration-300 font-semibold p-5 flex justify-start border-b-2 border-zinc-100 items-center bg-zinc-200 w-[100%]"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
              src={
                s.backdrop_path || s.profile_path
                  ? `https://image.tmdb.org/t/p/original/${
                      s.backdrop_path || s.profile_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
