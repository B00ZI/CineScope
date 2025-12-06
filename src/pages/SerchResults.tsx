
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
      return <h1> An error occurred: {Error} </h1>
   }

   if (!serchdata) {
      return <h1> no search resultes  </h1>
   }



   if (serchdata.length === 0) {
      return <h1> no Movie Found </h1>
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

