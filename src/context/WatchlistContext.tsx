import { useState, createContext } from "react";
import type { moviesDataType } from "../types/MovieDataType";
import type { ReactNode } from "react";
import useLocalStorage from "../hooks/LocalStorage";

interface WatchlistContextType {

    WatchlistMovies: moviesDataType[],
    ToggleWatchlist: (Movie: moviesDataType) => void
}



export const WatchlistContext = createContext<WatchlistContextType | undefined>(undefined)

type childrenType = { children: ReactNode }

export default function WatchlistContextProvider({ children }: childrenType) {

    const [WatchlistMovies, setWatchlistMovies] = useLocalStorage<moviesDataType[]>(watchlist,[])

    const ToggleWatchlist = (Movie: moviesDataType) => {
        if (WatchlistMovies.some(m => m.id === Movie.id)) {
            setWatchlistMovies((prev) => prev.filter(m => m.id !== Movie.id))
        } else {
            setWatchlistMovies((prev) => [...prev, Movie])
        }
    }

    return (
        < WatchlistContext.Provider value={{ WatchlistMovies, ToggleWatchlist }}>
            {children}
        </WatchlistContext.Provider>
    )

}
