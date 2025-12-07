import { AiFillStar } from 'react-icons/ai';

import { useContext } from 'react';
import type { moviesDataType } from '../types/MovieDataType';
import { ModalContext } from '../context/ModalContext';
import RatingDisplay from './Ui/ratingDisplay';
import { motion } from 'framer-motion';


const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

const Top15Cards = ({ movie, index }: { movie: moviesDataType, index: number }) => {
 
 
  const { setIsOpen , setMovieId} = useContext(ModalContext)!
  function modleHandler(){
    setIsOpen(true)
    setMovieId(movie.id)
  }
  console.log(movie)
  return (

<motion.div 
  variants={itemVariants}
  onClick={() => modleHandler()} 
  className="flex w-full gap-2 sm:gap-4 rounded-2xl sm:rounded-3xl border border-white/20 bg-white/5 backdrop-blur-sm px-3 sm:px-4 md:px-6 py-3 sm:py-4 transform transition-all duration-300 ease-out shadow-lg shadow-white/5 hover:scale-[1.03] hover:border-white/80">

  {/* Ranking Number - Responsive sizing */}
  <div className="flex items-center justify-center -mr-3 sm:-mr-6 md:-mr-8">
    <p
      style={{ fontFamily: 'Bebas Neue' }}
      className="text-[60px] sm:text-[100px] md:text-[120px] leading-none font-black text-white/15"
    >
      {index + 1}
    </p>
  </div>

  {/* Image - Responsive sizing */}
  <div
    className="h-20 w-16 sm:h-28 sm:w-24 md:h-32 md:w-28 rounded-xl sm:rounded-2xl bg-linear-to-br from-gray-800 to-gray-900 shadow-lg shrink-0 bg-cover bg-center"
    style={{ backgroundImage: `url(${movie.poster})` }}>
  </div>

  {/* wrapping on small screens */}
<div className="flex flex-wrap items-center gap-2 sm:gap-4 flex-1 min-w-0">
    
    {/* Movie Info - Responsive text */}
    <div className="flex flex-col justify-center gap-0.5 sm:gap-1 flex-1 min-w-[75px]">
      <h2 className="text-sm sm:text-lg md:text-2xl font-bold truncate leading-tight">
        {movie.title}
      </h2>
      <div className="flex items-center gap-1 text-[11px] sm:text-sm">
        <AiFillStar size={14} className="text-yellow-400 shrink-0 sm:w-4 sm:h-4" />
        <span>
          <b>{movie.rating}</b> • {movie.date}
        </span>
      </div>
    </div>

    {/* Rating Section - wraps to next line on small screens */}
    <div className="flex flex-col gap-0.5 justify-center min-w-fit ml-auto sm:ml-0">
      <p className="text-white/50 text-[10px] sm:text-xs md:text-sm text-right whitespace-nowrap">
        Your Rating
      </p>
      <div className="flex gap-0.5 justify-end">
        <RatingDisplay movie={movie}></RatingDisplay>
      </div>
    </div>
    
  </div>

</motion.div>

  );
};

export default Top15Cards;
