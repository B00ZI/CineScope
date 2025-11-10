import { useState , useEffect } from "react";



const FetchMovies = () => {

 interface moviesDatatype{
    name:string,
    poster:string,
    date:number
 }   

const [isLoding , setIsloding] = useState<boolean>(true)
const [moviesData , setMoviesData] = useState<moviesDatatype[]>([])


}

export default FetchMovies