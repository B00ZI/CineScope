import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { FormattedMovieDetails } from '../types/MovieDataType';


interface CacheContextType {
  getMovieById: (id: number ) => FormattedMovieDetails | undefined; // getter returns movie or undefined
  saveMovieDetails: (id: number, details: FormattedMovieDetails) => void;
}

export const MovieDetailsContext = createContext<CacheContextType | undefined>(undefined);

export default function MovieDetailsContextProvider({ children }: { children: ReactNode }) {
  const [MovieCache, setMovieCache] = useState<Record<number, FormattedMovieDetails>>({}); // empty object

  function saveMovieDetails(id: number , details: FormattedMovieDetails) {
    setMovieCache(prev => ({ ...prev, [id]: details }));
  }

  function getMovieById(id: number) {
    return MovieCache[id]; // return the movie object or undefined
  }

  return (
    <MovieDetailsContext.Provider value={{ getMovieById, saveMovieDetails }}>
      {children}
    </MovieDetailsContext.Provider>
  );
}
