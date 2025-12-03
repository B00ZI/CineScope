import { createContext } from "react";
import type { moviesDataType } from "../types/MovieDataType";



import { Movies as HERO_MOVIES } from "../components/HomeHero";

interface HeroContextType {
     HeroMovies: moviesDataType[];
}
export const HomeHeroContext = createContext<HeroContextType>({
  HeroMovies: HERO_MOVIES 
});

export const HomeHeroProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <HomeHeroContext.Provider value={{ HeroMovies: HERO_MOVIES }}>
      {children}
    </HomeHeroContext.Provider>
  );
};