import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import { useDetailsFetch } from '../components/FetchDetails';
interface CacheContextType {
  getMovieById: (id: number) => any | undefined;

}

export const MovieDetailsContext = createContext<CacheContextType | undefined>(undefined);

export default function MovieDetailsContextProvider({ children }: { children: ReactNode }) {
  const [MovieCache, setMovieCache] = useState<Record<number, any>>({}); 

  function saveMovieDetails(id: number , details: any) {
    setMovieCache(prev => ({ ...prev, [id]: details }));
  }
  
  function getMovieById(id: number) {
    if(Object.hasOwn(MovieCache , id ) ) {
    return MovieCache[id]; // return the movie object or undefined
    }else{
    const { Mdetails } = useDetailsFetch(id)
    saveMovieDetails(id , Mdetails)
    return MovieCache[id]; // return the movie object or undefined

    }
  }

  return (
    <MovieDetailsContext.Provider value={{ getMovieById }}>
      {children}
    </MovieDetailsContext.Provider>
  );
}
