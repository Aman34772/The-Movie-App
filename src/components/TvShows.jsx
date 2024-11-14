import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import Cards from "./templates/Cards";

const TvShows = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState("airing_today");
    const [tv, setTv] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    document.title = "SCSDB | Tv Shows" ;
    const GetTv = async () => {
        try {
          const { data } = await axios.get(`/tv/${category}?page=${page}`);
        //   console.log(data);
          if (data.results.length > 0) {
            setTv((prevState) => [...prevState, ...data.results]);
            setPage(page + 1);
          } else {
            setHasMore(false);
          }
          // console.log(data);
        } catch (error) {
          console.log("Error : ", error);
        }
      };
    
      function refreshHandler() {
        if (tv.length === 0) {
          GetTv();
        } else {
          setPage(1);
          setTv([]);
          GetTv();
        }
      }
      useEffect(() => {
        refreshHandler();
      }, [category]);
  return tv.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="w-full h-[10vh] px-[5%]  flex items-center justify-between">
        <h1 onClick={() => navigate(-1)} className="text-xl hover:text-[#6556CD]  text-zinc-400 font-semibold">
          <span>
            <i
              
              className=" mr-2 ri-arrow-left-line"
            ></i>
          </span>
          Tv Shows<small className="ml-1 text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="flex items-center w-[77%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["on_the_air", "popular","top_rated", "airing_today"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={GetTv}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default TvShows