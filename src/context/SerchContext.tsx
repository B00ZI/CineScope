import { createContext, useState } from "react";
import type { ReactNode } from "react";
import axios from "axios";
import type { TMDBMovie } from "../types/MovieDataType";



export const SerchContext = createContext<any>(undefined)

export default function SerchContextPreovider({ children }: { children: ReactNode }) {




    const [serchdata , setSerchdata] = useState()
    const [Louding , setLouding] = useState(false)
    const [Error , setError] = useState<null | string>(null)

    // const movieQuery = "the end";
    const apiKey = "48c7cae7bad0d7bfd809b07356e38b45";


    async function fetchData(movieQuery:string) {
        try {
            setLouding(true)
            const data = await axios.get(
                `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieQuery)}&api_key=${apiKey}`
            )
            const res = data.data.results
        
            const rawData = res.map((movie: TMDBMovie) => ({
    
                id: movie.id,
                title: movie.title,
                overview: movie.overview,
                poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                backdrop: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
                rating: Math.floor(movie.vote_average * 10) / 10,
                date: movie.release_date.match(/\d{4}/)?.[0] ?? "N/A",
        
    
            }))
              setSerchdata(rawData)
              console.log("fetc hapen ", rawData)

        }catch(err){
         setError("error fetching")
        }finally{
         setLouding(false)
        }
    
    }
    const serchResulte = {
            serchdata ,
            Louding ,
            Error
        }
    

    return (

        <SerchContext.Provider value={{fetchData , serchResulte}}>
            {children}
        </SerchContext.Provider>
    )
}

