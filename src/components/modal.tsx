import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiBookmark, BiSolidBookmark } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import { IoClose, IoCalendarOutline, IoTimeOutline, IoPricetag } from 'react-icons/io5';
import { ModalContext } from '../context/ModalContext';
import { useContext } from 'react';


const Modal = () => {
 
  const {IsOpen , setIsOpen} = useContext(ModalContext)!

 let css = ` ${IsOpen ? "":"hidden"} fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm `

  return (
    
    <div  onClick={()=>setIsOpen(false)} className= {css}  >


      <div   onClick={(e) => e.stopPropagation()}   className="linear-to-b  h-[80vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-white/10 from-gray-900/95 to-black/95 shadow-2xl backdrop-blur-md">
        {/* close btn  */}
        <button onClick={()=>setIsOpen(false)} className="cursor-pointer  sticky top-4 left-[90%] z-70 rounded-full bg-black/40 border border-black/50 p-2 transition-colors hover:bg-black/70">
          <IoClose size={24} className="text-white" />
        </button>

        {/* img */}
        <div className="relative -mt-10 h-48 overflow-hidden rounded-t-2xl sm:h-64">
          <img
            src="https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg"
            alt="Inception"
            className="h-full w-full object-cover"
          />
          <div className="absolute -inset-1 bg-linear-to-t from-gray-900 via-gray-900/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 -mt-16 px-4 pb-6 sm:px-6 md:-mt-20 md:px-8 md:pb-8">
          
          <h2 className="mb-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            Inception
          </h2>

          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm md:gap-4">
            <div className="flex items-center gap-1 text-yellow-400">
              <AiFillStar size={20} />
              <span className="text-base font-semibold text-white md:text-lg">
                8.8
              </span>
            </div>

            <div className="flex items-center gap-1 text-white/70">
              <IoCalendarOutline size={16} />
              <span>2010</span>
            </div>

            <div className="flex items-center gap-1 text-white/70">
              <IoTimeOutline size={16} />
              <span>148 min</span>
            </div>
          </div>

          {/* User Rating Section */}
          <div className="mb-6 rounded-xl border border-white/10 bg-white/5 p-4 shadow-lg backdrop-blur-sm">
            <p className="mb-3 text-sm text-white/50">Your Rating</p>
            <div className="flex gap-1">
              <AiFillStar size={32} className="cursor-pointer  text-yellow-400" />
              <AiFillStar size={32} className="cursor-pointer  text-yellow-400" />
              <AiFillStar size={32} className="cursor-pointer  text-yellow-400" />
              <AiFillStar size={32} className="cursor-pointer  text-yellow-400" />
              <AiOutlineStar size={32} className="text-white/30" />
              <span className="ml-3 flex items-center text-lg font-semibold text-white">
                4/5
              </span>
            </div>
          </div>

          {/* Genres */}
          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-white/90 shadow-sm backdrop-blur-sm">
              Action
            </span>
            <span className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-white/90 shadow-sm backdrop-blur-sm">
              Sci-Fi
            </span>
            <span className="rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-sm text-white/90 shadow-sm backdrop-blur-sm">
              Thriller
            </span>
          </div>

          {/* Overview */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-white md:text-xl">
              Overview
            </h3>
            <p className="text-sm leading-relaxed text-white/80 md:text-base">
              Cobb, a skilled thief who commits corporate espionage by
              infiltrating the subconscious of his targets is offered a chance
              to regain his old life as payment for a task considered to be
              impossible: inception, the implantation of another person's idea
              into a target's subconscious.
            </p>
          </div>

          {/* Director */}
          <div className="mb-6">
            <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">
              Director
            </h3>
            <p className="text-sm text-white/80 md:text-base">
              Christopher Nolan
            </p>
          </div>

          {/* Cast */}
          <div className="mb-6">
            <h3 className="mb-3 text-lg font-semibold text-white md:text-xl">
              Cast
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 shadow-sm backdrop-blur-sm">
                Leonardo DiCaprio
              </span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 shadow-sm backdrop-blur-sm">
                Joseph Gordon-Levitt
              </span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 shadow-sm backdrop-blur-sm">
                Ellen Page
              </span>
              <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80 shadow-sm backdrop-blur-sm">
                Tom Hardy
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="cursor-pointer flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-500 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-blue-600">
              <BiSolidBookmark size={20} />
              In Watchlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
