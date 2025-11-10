import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

import type { moviesDataType } from '../types/MovieDataType';

interface ModalContextType {
  IsOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
  ModalData: moviesDataType | null,
  setModalData: React.Dispatch<React.SetStateAction<moviesDataType | null>> ,
}


export const ModalContext = createContext<ModalContextType | undefined>(undefined);

type props = {children: ReactNode;}
export default function ModalContextProvider({children}:props) {

    const [IsOpen, setIsOpen] = useState(false);
    const [ModalData ,  setModalData] = useState<moviesDataType | null>(null);
 
  useEffect(() => {
  document.body.style.overflow = IsOpen ? "hidden" : "auto";
}, [IsOpen]);
 

  return (
    <ModalContext.Provider value={{ IsOpen, setIsOpen , ModalData , setModalData }}>
      {children}
    </ModalContext.Provider>
  );
}
