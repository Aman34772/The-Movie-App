import React, { useEffect, useState } from "react";
import Topnav from "../components/templates/Topnav";
import Dropdown from "../components/templates/Dropdown";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";

//40:41
const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  document.title = "SCSDB | TRENDING" ;
  const GetTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );
      if (data.results.length > 0) {
        setTrending((prevState) => [...prevState, ...data.results]);
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
    if (trending.length === 0) {
      GetTrending();
    } else {
      setPage(1);
      setTrending([]);
      GetTrending();
    }
  }

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);
  // console.log(trending);
  return trending.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="w-full h-[10vh] px-[5%]  flex items-center justify-between">
        <h1
          onClick={() => navigate(-1)}
          className="text-xl hover:text-[#6556CD]  text-zinc-400 font-semibold"
        >
          <span>
            <i className=" mr-2 ri-arrow-left-line"></i>
          </span>
          Trending <small className="ml-1 text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="flex items-center w-[77%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => setDuration(e.target.value)}
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
