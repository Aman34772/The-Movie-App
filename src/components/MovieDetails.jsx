import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadMovie, removeMovie } from "../store/actions/MovieActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.movie);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadMovie(id));
    return () => {
      dispatch(removeMovie());
    };
  }, []);
  console.log(info);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://image.tmdb.org/t/p/original/${info.details.backdrop_path})`,
        backgroundPosition: "top 10%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-screen h-screen px-[10%] "
    >
      {/*part1 navigation*/}
      <nav className="h-[10vh] items-center w-full text-zinc-100 flex gap-10 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className=" mr-2 ri-arrow-left-line"
        ></Link>
        <a target="_blank" href={info.details.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.wikidata.org/wiki/${info.externalids.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          target="_blank"
          href={`https://www.imdb.com/title/${info.externalids.imdb_id}`}
        >
          imdb
        </a>
      </nav>
      {/*part2 poster details */}
      <div className="w-full flex ">
      <img
        className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,5)]"
        src={`https://image.tmdb.org/t/p/original/${
          info.details.poster_path || info.details.backdrop_path
        }`}
        alt=""
      />
        <div>
          <div className="mt-5">
            {info.watchprovider &&
              info.watchprovider.buy &&
              info.watchprovider.buy.map((m) => (
                <img className="w-[5vh] h-[5vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${m.logo_path}`}
                ></img>
              ))}
            {info.watchprovider &&
              info.watchprovider.rent &&
              info.watchprovider.rent.map((m) => (
                <img className="w-[5vh] h-[5vh] object-cover rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${m.logo_path}`}
                ></img>
              ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
