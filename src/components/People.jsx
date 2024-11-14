import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./Loading";
import Topnav from "./templates/Topnav";
import Dropdown from "./templates/Dropdown";
import Cards from "./templates/Cards";

const People = () => {
    const navigate = useNavigate();
    const [category, setCategory] = useState("popular");
    const [person, setPerson] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    document.title = "SCSDB | People" ;
    const GetPerson = async () => {
        try {
          const { data } = await axios.get(`/person/${category}?page=${page}`);
        //   console.log(data);
          if (data.results.length > 0) {
            setPerson((prevState) => [...prevState, ...data.results]);
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
        if (person.length === 0) {
          GetPerson();
        } else {
          setPage(1);
          setPerson([]);
          GetPerson();
        }
      }
      useEffect(() => {
        refreshHandler();
      }, [category]);
  return person.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="w-full h-[10vh] px-[5%]  flex items-center justify-between">
        <h1 onClick={() => navigate(-1)} className="text-xl hover:text-[#6556CD]  text-zinc-400 font-semibold">
          <span>
            <i
              
              className=" mr-2 ri-arrow-left-line"
            ></i>
          </span>
          People <small className="ml-1 text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="flex items-center w-[77%]">
          <Topnav />
          
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={person.length}
        next={GetPerson}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={person} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
}

export default People