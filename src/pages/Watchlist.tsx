
import MovieCardRendrer from "../components/MovieCardRendrer";

export default function Watchlist() {
  return (
    <div className="flex flex-col gap-15">
      <h1 className="w-fit text-3xl font-semibold text-white/70 hover:text-white">
         Your Watchlist
      </h1>
     <MovieCardRendrer></MovieCardRendrer>

      
    </div>
  );
}
