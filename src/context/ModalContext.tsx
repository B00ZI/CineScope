import { createContext, useState, useEffect, ReactNode } from 'react';
interface ModalContextType {
  IsOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

export default function ModalContextProvider({children,}:{children: ReactNode;}) {

    const [IsOpen, setIsOpen] = useState(false);

  useEffect(() => {
  document.body.style.overflow = IsOpen ? "hidden" : "auto";
}, [IsOpen]);


  return (
    <ModalContext.Provider value={{ IsOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}
