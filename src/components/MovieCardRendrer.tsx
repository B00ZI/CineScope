

import type { moviesDataType } from "../types/MovieDataType";
import MovieCards from "./MovieCards";
import { moviesData } from "./FetchMovies";

export default function MovieCardRendrer() {




// const moviesData: moviesDataType[] = [
//     { id:1 , name : "marve", rating:8.4 , date : 2020 , catig:[ "djfn"] },
//     { id:2 , name : "soko", rating:3.3, date : 2012 ,catig:["action" , "djfn"] },
//     { id:3 , name : "marka", rating:8.6 , date : 2030 ,catig:["action" , "ndo" , "djfn"] },
//     { id:4 , name : "dinma", rating:6.2 , date : 2015 ,catig:["dk" , "cood" , "djfn"] },
//     { id:5 , name : "dinma", rating:6.2 , date : 2015 ,catig:["losdk" , "brid" , "djfn"]},
//     { id:6 , name : "dinma", rating:6.2 , date : 2015 ,catig:["aldction" , "cood" , "djfn"]},
//     { id:7 , name : "dinma", rating:6.2 , date : 2015 ,catig:["actkdion" , "fgn" , "djfn"]},
//   ]


 return (
<div className="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

    { moviesData.map(movie => (
        <MovieCards  movie={movie} key={movie.id} ></MovieCards>
    ))}

</div>

)

}


  

