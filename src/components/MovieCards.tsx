import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { BiBookmark, BiSolidBookmark } from 'react-icons/bi';

import DetailBtn from './Ui/DetailBtn';
import WatchlistBtn from './Ui/WatchlistBtn';

import type { moviesDataType } from "../types/MovieDataType";
import { useContext } from 'react';
import { ModalContext } from '../context/ModalContext';




const MovieCards = ({ movie }: { movie: moviesDataType }) => {

const {setIsOpen , setMovieId} = useContext(ModalContext)!


function openModal(){
  setIsOpen(true)
  setMovieId(movie.id)
}



  return (
<div onClick={openModal} className="cursor-pointer group relative overflow-hidden flex h-60 flex-col justify-end 
     rounded-2xl border border-white px-3 py-4 md:h-80 md:px-4 md:py-5"
     >
  <div
    className="absolute inset-0 bg-cover bg-center transform transition-transform duration-400 group-hover:scale-110"
    style={{ backgroundImage: `url(${movie.poster})` }}
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent rounded-2xl" />

  <h2 className="relative z-10 text-lg font-bold md:text-xl">{movie.title}</h2>
  <div className="relative z-10 mb-3 flex items-center gap-1 text-sm">
    <AiFillStar size={15} />
    <span>
      <b>{movie.rating}</b> • {movie.date}
    </span>
  </div>

  <div className="relative z-10 mb-5 flex flex-wrap gap-1 text-[11px] font-semibold md:gap-2">
    {/* {movie.catig.map(type => <p className="rounded-xl border border-white/10 bg-white/7 px-2 py-0.5">{type}</p>)} */}
  </div>
    
  <div className="flex gap-3 relative z-10">
    <WatchlistBtn/>
    <DetailBtn />
  </div>
</div>
  );
};

export default MovieCards;
