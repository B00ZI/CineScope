import { AiFillStar } from 'react-icons/ai';
import { IoClose, IoCalendarOutline, IoTimeOutline } from 'react-icons/io5';
import { ModalContext } from '../context/ModalContext';
import { useContext } from 'react';
import WatchlistBtn from './Ui/WatchlistBtn';
import { useDetailsFetch } from './FetchDetails';
import Ratting from './Ui/Ratting';
import type { moviesDataType } from '../types/MovieDataType';

import { motion } from 'framer-motion'; // Add import

const Modal = ({ modalData }: { modalData: moviesDataType | null }) => {

  const { IsOpen, setIsOpen, MovieId } = useContext(ModalContext)!;
  
 
  const { Mdetails } = useDetailsFetch(MovieId);
  const details = Mdetails;


  if (!IsOpen || !modalData) return null;

  return (
    <motion.div  
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      onClick={() => setIsOpen(false)} 
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
    >
      <motion.div 
       initial={{opacity:0 , y:50}}
       animate={{opacity:1 , y:0}}
       exit={{opacity:0 , y:50}}
       transition={{duration: 0.6}}
   
        onClick={(e) => e.stopPropagation()} 
        className="bg-linear-to-b from-gray-900/95 to-black/95 h-[80vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md relative"
      >
        

        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-4 right-4 z-50 rounded-full bg-black/40 border border-white/10 p-2 transition-colors hover:bg-white/20"
        >
          <IoClose size={24} className="text-white" />
        </button>

        {/* Image Section */}
        <div className="relative h-48 sm:h-64 w-full">
           {/* Safety check for image */}
           {modalData.backdrop ? (
             <img
               src={modalData.backdrop}
               alt={modalData.title}
               className="h-full w-full object-cover"
             />
           ) : (
             <div className="h-full w-full bg-gray-800 flex items-center justify-center text-white/20">No Image</div>
           )}
          <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="relative z-10 px-4 pb-6 sm:px-6 md:px-8 md:pb-8 -mt-12">
          
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl drop-shadow-lg">
            {modalData.title}
          </h2>

          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm md:gap-4">
            <div className="flex items-center gap-1 text-yellow-400">
              <AiFillStar size={20} />
              <span className="text-base font-semibold text-white md:text-lg">
                {modalData.rating}
              </span>
            </div>

            <div className="flex items-center gap-1 text-white/70">
              <IoCalendarOutline size={16} />
              <span>{modalData.date}</span>
            </div>

            <div className="flex items-center gap-1 text-white/70">
              <IoTimeOutline size={16} />
              {/* Optional chaining prevents crash if details aren't loaded yet */}
              <span>{details?.runTime ? details.runTime : '...'}</span>
            </div>
          </div>

          {/* Rating Component */}
          <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-sm">
            <p className="mb-3 text-sm text-white/50">Your Rating</p>
            <Ratting movie={modalData} />
          </div>

          {/* Genres */}
          <div className="mb-6 flex flex-wrap gap-2">
            {details?.genres?.map((genre: string, index: number) => (
              <span key={index} className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-white/90 shadow-sm">
                {genre}
              </span>
            ))}
          </div>

          {/* Overview */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-white md:text-xl">Overview</h3>
            <p className="text-sm leading-relaxed text-white/80 md:text-base">
              {modalData.overview}
            </p>
          </div>

          {/* Director */}
          <div className="mb-6">
            <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">Director</h3>
            <p className="text-sm text-white/80 md:text-base">
              {details?.Director || 'Loading...'}
            </p>
          </div>

          {/* Cast */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-white md:text-xl">Cast</h3>
            <div className="flex flex-wrap gap-2">
              {details?.cast?.map((actor: string, index: number) => (
                <span key={index} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80">
                  {actor}
                </span>
              )) || 'Loading...'}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex  ">
            <WatchlistBtn Movie={modalData} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
export default Modal;