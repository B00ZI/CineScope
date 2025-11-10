import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { BiBookmark, BiSolidBookmark } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import { IoClose, IoCalendarOutline, IoTimeOutline } from 'react-icons/io5';
import DetailBtn from './Ui/DetailBtn';
import type { moviesDataType } from "../types/MovieDataType";




const MovieCards = ({movie}:{movie:moviesDataType}) => {
  







  return (
    <div className="flex h-auto flex-col justify-end rounded-2xl border border-white/30 bg-black px-3 py-4  md:h-96 md:px-4 md:py-5">
      <h2 className="text-lg font-bold md:text-xl">{movie.name}</h2>
      <div className="mb-3 flex items-center gap-2 text-sm">
        <AiFillStar size={16} />
        <span>
          <b>{movie.rating}</b> • {movie.date}
        </span>
      </div>

      <div className="mb-5 flex flex-wrap gap-1 text-[11px] font-semibold  md:gap-2">
        {movie.catig.map(type => <p className="rounded-xl border border-white/10 bg-white/7 px-2 py-0.5">{type}</p>)}
        
      </div>

      <div className="flex gap-3">
        <button  className="flex flex-1 items-center justify-center gap-2 rounded-[10px] border border-white/10 bg-white/10 px-2 py-1 text-sm font-semibold transition-colors hover:bg-white/20">
          <BiBookmark size={15} />
          <span className="hidden min-[420px]:block">Watchlist</span>
        </button>
     <DetailBtn movie={movie} />
     
      </div>
    </div>
  );
};

export default MovieCards;
