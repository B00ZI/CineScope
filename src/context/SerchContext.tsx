import { createContext, useEffect } from "react";
import type { ReactNode } from "react";
import axios from "axios";
import type { TMDBMovie } from "../types/MovieDataType";


export const SerchContext = createContext<() => void>(() => { })

export default function SerchContextPreovider({ children }: { children: ReactNode }) {




    // const [serchResulte , setSerchResulte] = useState()
    // const [Louding , setLouding] = useState()
    // const [Error , setError] = useState()

    const movieQuery = "the end";
    const apiKey = "48c7cae7bad0d7bfd809b07356e38b45";


    async function fetchData() {

        const data = await axios.get(
            `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(movieQuery)}&api_key=${apiKey}`
        )
        const res = data.data.results
        console.log("res=====" , res[0])
        const rawData = res.map((movie: TMDBMovie) => ({

            id: movie.id,
            title: movie.title,
            overview: movie.overview,
            poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
            rating: Math.floor(movie.vote_average * 10) / 10,
            date: movie.release_date.match(/\d{4}/)?.[0] ?? "N/A",
    

        }))
        console.log(rawData)

    }


    return (

        <SerchContext.Provider value={fetchData}>
            {children}
        </SerchContext.Provider>
    )
}

