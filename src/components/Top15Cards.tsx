import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { BiBookmark, BiSolidBookmark } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';

const Top15Cards = () => {
  return (

  <div className="flex flex-wrap w-full gap-4 rounded-3xl border border-white/20 bg-white/5 backdrop-blur-sm px-4 md:px-6 py-4 shadow-xl shadow-black/20">
    
    {/* RNumber */}
    <div className="hidden sm:flex -mr-6 md:-mr-8 items-center justify-center">
      <p
        style={{ fontFamily: 'Bebas Neue' }}
        className="z-20 -mb-4 text-[100px] md:text-[120px] leading-none font-black text-white/15"
      >
        4
      </p>
    </div>

    {/* Mobile Ranking Number (small) */}
    <div className="sm:hidden flex items-center justify-center z-30  -mr-6">
      <p
        style={{ fontFamily: 'Bebas Neue' }}
        className="text-[80px] leading-none font-black text-white/15"
      >
        4
      </p>
    </div>

    {/* Image */}
    <div className="h-24 w-20 sm:h-28 sm:w-24 md:h-32 md:w-28 rounded-2xl bg-linear-to-br from-gray-800 to-gray-900 shadow-lg shrink-0"></div>

    {/* Movie Info */}
    <div className="flex flex-col justify-center gap-1 flex-1 min-w-30">
      <h2 className="text-base sm:text-lg md:text-2xl font-bold truncate">Interstellar</h2>
      <div className="mb-1 md:mb-2 flex items-center gap-1 text-xs sm:text-sm">
        <AiFillStar size={16} className="text-yellow-400 shrink-0" />
        <span>
          <b>8.8</b> • 2010
        </span>
      </div>

      <div className="flex flex-wrap gap-1 text-[10px] sm:text-[11px] font-semibold md:gap-2">
        <p className="rounded-lg border border-white/15 bg-white/10 px-2 py-0.5 shadow-sm">
          Action
        </p>
        <p className="rounded-lg border border-white/15 bg-white/10 px-2 py-0.5 shadow-sm">
          Sci-Fi
        </p>
        <p className="rounded-lg border border-white/15 bg-white/10 px-2 py-0.5 shadow-sm">
          Thriller
        </p>
      </div>
    </div>

    {/* Rating Section */}
    <div className="flex flex-col gap-0.5 ml-auto justify-center  min-w-30 mt-2 sm:mt-0">
      <p className="text-white/50 text-xs sm:text-sm text-right">Your Rating</p>
      <div className="flex gap-0.5 justify-end">
        <AiFillStar size={18} className="text-yellow-400 sm:w-5 sm:h-5" />
        <AiFillStar size={18} className="text-yellow-400 sm:w-5 sm:h-5" />
        <AiFillStar size={18} className="text-yellow-400 sm:w-5 sm:h-5" />
        <AiFillStar size={18} className="text-yellow-400 sm:w-5 sm:h-5" />
        <AiOutlineStar size={18} className="text-white/30 sm:w-5 sm:h-5" />
      </div>
    </div>

  </div>

  );
};

export default Top15Cards;
