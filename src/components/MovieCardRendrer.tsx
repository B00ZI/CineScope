
import MovieCards from "./MovieCards";
import type { moviesDataType } from "../types/MovieDataType";

export default function MovieCardRendrer({Movies}:{Movies: moviesDataType[]} ) {


 return (
<div className="grid grid-cols-2 gap-6 md:gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    { Movies?.map(movie => (
        <MovieCards  movie={movie} key={movie.id} ></MovieCards>
    ))}

</div>

)

}


  

