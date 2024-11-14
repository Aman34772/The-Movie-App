import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import Cards from "./templates/Cards";

const Movie = () => {

    const navigate = useNavigate();
    const [category, setCategory] = useState("now_playing");
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    document.title = "SCSDB | MOVIES" ;
    const GetMovies = async () => {
        try {
          const { data } = await axios.get(`/movie/${category}?page=${page}`);
        //   console.log(data);
          if (data.results.length > 0) {
            setMovies((prevState) => [...prevState, ...data.results]);
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
        if (movies.length === 0) {
          GetMovies();
        } else {
          setPage(1);
          setMovies([]);
          GetMovies();
        }
      }
      useEffect(() => {
        refreshHandler();
      }, [category]);
  return movies.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="w-full h-[10vh] px-[5%]  flex items-center justify-between">
        <h1 onClick={() => navigate(-1)} className="text-xl hover:text-[#6556CD]  text-zinc-400 font-semibold">
          <span>
            <i
              
              className=" mr-2 ri-arrow-left-line"
            ></i>
          </span>
          Movies<small className="ml-1 text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="flex items-center w-[77%]">
          <Topnav />
          <Dropdown
            title="Category"
            options={["popular", "top_rated","upcoming", "now_playing"]}
            func={(e) => setCategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={movies.length}
        next={GetMovies}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={movies} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default Movie