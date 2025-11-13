import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiBookmark, BiSolidBookmark } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import WatchlistBtn from './Ui/WatchlistBtn';
import { ModalContext } from '../context/ModalContext';
import { useContext } from 'react';
import { useFetch } from './FetchMovies';
import DetailBtn from './Ui/DetailBtn';

const HomeHero = () => {
const { Movies } = useFetch()
const {setIsOpen , setMovieId} = useContext(ModalContext)!

 
const testMovie = Movies?.[0]

function openModal(){
  
  if (testMovie){
  setIsOpen(true)
  setMovieId(testMovie.id)
  }
}


  return (
    <div onClick={openModal} className="relative shadow-lg shadow-white/10 hover:shadow-white/20 overflow-hidden flex h-[50vh] max-h-[450px]  min-h-[300px] cursor-pointer flex-col items-start justify-center rounded-2xl bg-gray-900 p-6 sm:pl-12  ">
        <div
    className="absolute inset-0 bg-cover bg-center transform transition-transform duration-400 group-hover:scale-110"
    style={{ backgroundImage: `url(${testMovie?.backdrop})` }}
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent rounded-2xl" />

      <p className="z-10 rounded-xl mb-4 border border-white/10 bg-white/7 px-3 py-1 text-[10px]">
        Trending Now
      </p>
      <h2 className="z-10 mb-0.5 text-3xl font-bold">Interstellar</h2>
      <div className="z-10 mb-4 flex items-center gap-2 text-[13px] ">
        <AiFillStar size={15} />
        <span>
          <b>8.8</b> • 2010
        </span>
      </div>

      <div className="z-10 mb-4 flex flex-wrap gap-2 text-[11px] font-semibold md:mb-4 md:gap-2">
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
      <p className="z-10 mb-5 max-w-80 text-sm md:text-sm  font-light">
        In a dystopian future where memories can be bought and sold, a detective
        must navigate the neon-lit streets to uncover a conspiracy that ...
    
      </p>
      <div className="z-10 flex gap-2">
        {/* <button className="flex  items-center justify-center gap-1 rounded-[10px] border border-white/10 bg-white/10 px-5 py-1 text-sm font-semibold transition-colors hover:bg-white/20">
          <BiBookmark size={15} />
          <span className="">Watchlist</span>
        </button> */}
      <WatchlistBtn/>
      <DetailBtn/>

        

        {/* <button onClick={()=>setIsOpen(true)} className="flex items-center justify-center gap-1 rounded-[10px] border border-white/10 text-black bg-white/80 px-3 py-1 text-sm  font-semibold transition-colors hover:bg-white">
          <BsInfoCircle size={15} />
             <span className="hidden min-[300px]:block">Details</span>
        </button> */}
      </div>
    </div>
  );
};

export default HomeHero;
