import { BiBookmark, BiSolidBookmark } from 'react-icons/bi';
import { useState } from 'react';




export default function WatchlistBtn() {
  
  const [isSaved, setIssaved] = useState(false);

  function saveTgl(e: any) {
    setIssaved(!isSaved);
    e.stopPropagation();
  }

  {
    return (
      <button
        onClick={(e) => saveTgl(e)}
        className={`cursor-pointer flex flex-1 items-center justify-center gap-2
         rounded-[10px] border border-white/10  ${isSaved ? ' bg-white/90 text-black ' : ' bg-white/10 '} 
         px-2 h-8 min-w-12 py-1 text-sm font-semibold transition duration-400 hover:scale-105`}
      >
        {isSaved ? <BiSolidBookmark size={15} /> : <BiBookmark size={15} />}

        <span className="hidden min-[420px]:block">
          {isSaved ? 'In Watchlist' : '+Watchlist'}
        </span>
      </button>
    );
  }
}
