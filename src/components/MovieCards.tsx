import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { BiBookmark, BiSolidBookmark } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import { IoClose, IoCalendarOutline, IoTimeOutline } from 'react-icons/io5';

const MovieCards = () => {
  return (
    <div className="flex h-auto flex-col justify-end rounded-2xl border border-white/30 bg-black px-3 py-4  md:px-5 md:py-7 md:h-96 ">
      <h2 className="mb-1 text-lg md:text-2xl font-bold">Interstellar</h2>
      <div className="mb-5 flex items-center gap-2 text-sm md:text-lg">
        <AiFillStar size={20} />
        <span>
          <b>8.8</b> • 2010
        </span>
      </div>

      <div className=" mb-4 md:mb-7 flex flex-wrap gap-1 md:gap-2 text-[11px]  font-semibold">
        <p className="rounded-xl border border-white/10 bg-white/7 px-2 py-0.5">
          Action
        </p>
        <p className="rounded-xl border border-white/10 bg-white/7 px-2 py-0.5">
          Sci-Fi
        </p>
        <p className="rounded-xl border border-white/10 bg-white/7 px-2 py-0.5">
          Thriller
        </p>
      </div>

      <div className="flex gap-2">
        <button className="flex flex-1 items-center justify-center gap-1 rounded-[10px] border border-white/10 bg-white/10 p-2 font-bold transition-colors hover:bg-white/20">
          <BiBookmark size={18} /><span className="hidden min-[420px]:block">List</span>


        </button>
        <button className=" w-9 rounded-[10px] border border-white/10 bg-white/10 p-1 transition-colors hover:bg-white/20">
          <FaRegHeart size={18} className="mx-auto" />
        </button>
        <button className=" w-9 rounded-[10px] bg-white p-1 text-black transition-colors hover:bg-white/90">
          <BsInfoCircle size={18} className="mx-auto" />
        </button>
      </div>
    </div>
  );
};

export default MovieCards;
