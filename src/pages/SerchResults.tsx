
import { useContext } from "react"
import { SerchContext } from "../context/SerchContext"
import MovieCardRendrer from "../components/MovieCardRendrer"
export default function SerchResults() {

   const { serchResulte } = useContext(SerchContext)!;
   const { serchdata, Loading, Error } = serchResulte



   if (Loading) {
      return (
         <div className="flex flex-col items-center justify-center min-h-[300px] gap-4">
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
            <p className="text-white/50 animate-pulse">Searching for movies...</p>
         </div>
      );
   }

   if (Error) {
      return <div className="flex flex-col items-center justify-center min-h-[400px] p-6">
         <div className="relative overflow-hidden rounded-2xl   backdrop-blur-sm p-8 text-center max-w-md shadow-lg">
            <div className="relative z-10">
               <h3 className="text-white/90 font-semibold text-2xl mb-2">
                  Search Failed
               </h3>
              
               <p className="text-white/50 max-w-sm mb-4">
                    A network error occurred while fetching data.
                  Please try again.
               </p>
               <button
                  onClick={() => window.location.reload()}
                  className="flex items-center justify-center gap-2 rounded-xl text-red-300 border border-red/20  backdrop-blur-sm px-6 py-2.5 cursor-pointer text-sm font-semibold transition-all duration-300 hover:scale-105 mx-auto"
               >
                  <span>Try Again</span>
               </button>
            </div>
         </div>
      </div>
   }

   if (!serchdata || serchdata.length === 0) {
      return <div className="flex flex-col items-center justify-center min-h-[40vh] py-12 text-center">
         <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-white/20 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
         </svg>
         <h3 className="text-white/90 font-semibold text-2xl mb-2">
            Start Your Search
         </h3>
         <p className="text-white/50 max-w-sm">
            Enter a movie title or TV show name in the search bar above to find details, rate, and add to your watchlist.
         </p>
      </div>
   }



   console.log(serchdata)
   return (
      <>

         <h1 className="w-fit text-3xl font-semibold text-white/70 hover:text-white mb-[60px]">
            Search Results:
         </h1>
         <MovieCardRendrer Movies={serchdata} ></MovieCardRendrer>
      </>

   )
}

