import { createContext, useState } from "react";
import type { ReactNode } from "react";
import axios from "axios";
import type { TMDBMovie } from "../types/MovieDataType";
import type { moviesDataType } from "../types/MovieDataType";



export const SerchContext = createContext<any>(undefined)

export default function SerchContextPreovider({ children }: { children: ReactNode }) {




    const [serchdata , setSerchdata] = useState<moviesDataType[]>()
    const [Loading , setLoading] = useState(false)
    const [Error , setError] = useState<null | string>(null)

    const apiKey = import.meta.env.VITE_API_KEY


    async function fetchData(movieQuery:string) {
        try {
            setLoading(true)
            const data = await axios.get(
                `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieQuery)}&api_key=${apiKey}`
            )
            const res = data.data.results
        
            const rawData = res.map((movie: TMDBMovie) => ({
    
                id: movie.id,
                title: movie.title,
                overview: movie.overview,

                poster: movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : null,
                backdrop: movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : null,
              
                rating: Math.floor(movie.vote_average * 10) / 10,
            date: movie.release_date ? movie.release_date.substring(0, 4) : "N/A",
        
    
            }))
              setSerchdata(rawData)
              console.log("fetc hapen ", rawData)

        }catch(err){
         setError("error fetching")
        }finally{
         setLoading(false)
        }
    
    }
    const serchResulte = {
            serchdata ,
            Loading ,
            Error
        }
    

    return (

        <SerchContext.Provider value={{fetchData , serchResulte}}>
            {children}
        </SerchContext.Provider>
    )
}

