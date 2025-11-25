import { createContext, useState } from 'react';
import type { ReactNode } from 'react';

interface CacheContextType {
  getMovieById: (id: number ) => any | undefined; // getter returns movie or undefined
  saveMovieDetails: (id: number, details: any) => void;
}

export const MovieDetailsContext = createContext<CacheContextType | undefined>(undefined);

export default function MovieDetailsContextProvider({ children }: { children: ReactNode }) {
  const [MovieCache, setMovieCache] = useState<Record<number, any>>({}); // empty object

  function saveMovieDetails(id: number , details: any) {
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
