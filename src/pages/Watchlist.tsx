import MovieCards from "../components/MovieCards";


export default function Watchlist() {
  return (
    <div className="flex flex-col gap-15">
      <h1 className="w-fit text-3xl font-semibold text-white/70 hover:text-white">
         Your Watchlist
      </h1>
       <div className="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

        <MovieCards></MovieCards>
        <MovieCards></MovieCards>
        <MovieCards></MovieCards>
        <MovieCards></MovieCards>
        <MovieCards></MovieCards>
        <MovieCards></MovieCards>
        <MovieCards></MovieCards>
        <MovieCards></MovieCards>
        <MovieCards></MovieCards>

        </div>
    </div>
  );
}
