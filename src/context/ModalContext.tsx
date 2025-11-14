import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';



interface ModalContextType {
  IsOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  MovieId: number | null,
  setMovieId: React.Dispatch<React.SetStateAction<number | null>> ,
}


export const ModalContext = createContext<ModalContextType | undefined>(undefined);

type props = {children: ReactNode;}
export default function ModalContextProvider({children}:props) {

    const [IsOpen, setIsOpen] = useState(false);
    const [MovieId ,  setMovieId] = useState<number | null>(null);
 
  useEffect(() => {
  document.body.style.overflow = IsOpen ? "hidden" : "auto";
}, [IsOpen]);
 

  return (
    <ModalContext.Provider value={{ IsOpen, setIsOpen , MovieId , setMovieId }}>
      {children}
    </ModalContext.Provider>
  );
}
