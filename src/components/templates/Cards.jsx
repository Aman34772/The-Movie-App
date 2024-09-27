import React from 'react'
import { Link } from 'react-router-dom'

const Cards = ({data,title}) => {
  console.log(data);
  return (
    <div className='flex flex-wrap w-full h-full justify-center py-[2%] bg-[#1F1E24] '>
    {data.map((c,i)=><Link key={i} className='relative w-[25vh] mr-[5%] mb-[5%]'>
    <img className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,5)]" src={`https://image.tmdb.org/t/p/original/${
       c.poster_path || c.backdrop_path || c.profile_path


    }`} alt="" />
    <h1 className='text-xl font-semibold text-zinc-300 mt-3'>
    {c.name || c.title || c.original_name || c.original_title}
    
    </h1>
    {c.popularity && 
    <div className='absolute right-[-10%] bottom-[25%] bg-yellow-600 text-lg font-semibold rounded-full text-white w-[7vh] h-[7vh] flex justify-center items-center'>{(c.popularity/10).toFixed()}<sup>%</sup></div>}
    </Link>)}
    </div>
  )
}

export default Cards