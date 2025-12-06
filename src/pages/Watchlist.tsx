
import MovieCardRendrer from "../components/MovieCardRendrer";
import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";

export default function Watchlist() {
  

  const context = useContext(WatchlistContext)
  if (!context) return null 

  const {WatchlistMovies} = context
  
   if (WatchlistMovies.length === 0) {
      return (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
             <h1 className="text-3xl font-semibold text-white/70 mb-4">Your Watchlist is Empty!</h1>
             <p className="text-white/50 text-lg max-w-md">
                 It looks like you haven't saved any movies yet. Go back to the home page and click '+Watchlist' on a movie card to start tracking.
             </p>
          </div>
      );
  }


  return (
    <div className="flex flex-col gap-15">
      <h1 className="w-fit text-3xl font-semibold text-white/70 hover:text-white">
         Your Watchlist
      </h1>
     <MovieCardRendrer Movies={WatchlistMovies}></MovieCardRendrer>

      
    </div>
  );
}
