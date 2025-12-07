import { AiFillStar } from 'react-icons/ai';


import DetailBtn from './Ui/DetailBtn';
import WatchlistBtn from './Ui/WatchlistBtn';

import type { moviesDataType } from "../types/MovieDataType";
import { useContext } from 'react';  
import { ModalContext } from '../context/ModalContext';
import { motion } from 'framer-motion'


const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
};

const MovieCards = ({ movie }: { movie: moviesDataType }) => {

const {setIsOpen , setMovieId} = useContext(ModalContext)!


function openModal(){
  setIsOpen(true)
  setMovieId(movie.id)
}



  return (
<motion.div 
variants={itemVariants}
 onClick={openModal} className="cursor-pointer group relative overflow-hidden flex h-50 flex-col justify-end 
     rounded-2xl border border-white px-3 py-4 md:h-80 md:px-4 md:py-5"
     >
  <div
    className="absolute inset-0 bg-cover bg-center transform transition-transform duration-400 group-hover:scale-110"
    style={{ backgroundImage: `url(${movie.poster})` }}
  />
  <div className="absolute inset-0 bg-linear-to-t from-black via-black/70 to-transparent rounded-2xl" />

  <h2 className="relative z-10 text-lg font-bold md:text-xl">{movie.title}</h2>
  <div className="relative z-10 mb-5 flex items-center gap-1 text-sm">
    <AiFillStar size={15} />
    <span>
      <b>{movie.rating}</b> • {movie.date}
    </span>
  </div>


    
  <div className="flex gap-3 relative z-10">
    <WatchlistBtn Movie={movie}  />
    <DetailBtn />
  </div>
</motion.div>
  );
};

export default MovieCards;
