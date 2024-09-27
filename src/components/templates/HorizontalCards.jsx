import React from "react";


const HorizontalCards = ({ data }) => {
  return (
    <div className="w-[100%] flex  overflow-y-hidden mb-5 p-2">
      {data.map((card, i) => (
        <div key={i} className="min-w-[18%] bg-zinc-900 mr-5 mb-5 ">
          <img
            className="w-full h-[45%] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              card.backdrop_path || card.poster_path
            }`}
            alt=""
          />
          <div className="text-white p-2">
            <h1 className="mt-3 text-xl font-semibold leading-[0.99]">
              {card.name ||
                card.title ||
                card.original_name ||
                card.original_title}
            </h1>
            <p className=" text-xs mt-2">
              {card.overview.slice(0, 50)}...
              <span className="text-zinc-400">more</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalCards;
