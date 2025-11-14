
import MovieCardRendrer from "../components/MovieCardRendrer";
import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";

export default function Watchlist() {
  

  const context = useContext(WatchlistContext)
  if (!context) return null 

  const {WatchlistMovies} = context
  return (
    <div className="flex flex-col gap-15">
      <h1 className="w-fit text-3xl font-semibold text-white/70 hover:text-white">
         Your Watchlist
      </h1>
     <MovieCardRendrer Movies={WatchlistMovies}></MovieCardRendrer>

      
    </div>
  );
}
