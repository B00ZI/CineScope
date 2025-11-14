import { useState, createContext } from "react";
import type { moviesDataType } from "../types/MovieDataType";
import type { ReactNode } from "react";


interface WatchlistContextType {

    WatchlistMovies: moviesDataType[],
    ToggelWatchlist: (Movie: moviesDataType) => void
}



export const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined)

type childrenType = { children: ReactNode }

export default function WatchlistContextProvider({ children }: childrenType) {

    const [WatchlistMovies, setWatchlistMovies] = useState<moviesDataType[]>([])

    const ToggelWatchlist = (Movie: moviesDataType) => {
        if (WatchlistMovies.some(m => m.id === Movie.id)) {
            setWatchlistMovies((prev) => prev.filter(m => m.id !== Movie.id))
        } else {
            setWatchlistMovies((prev) => [...prev, Movie])
        }
    }

    return (
        < WatchlistContext.Provider value={{ WatchlistMovies, ToggelWatchlist }}>
            {children}
        </WatchlistContext.Provider>
    )

}
