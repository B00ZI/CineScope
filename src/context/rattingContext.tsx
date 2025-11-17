import { createContext , useState } from "react";
import type { ReactNode } from "react";

interface RattingContextType {
    userRatting: Record<number,number>,
    Ratte:(id: number , ratting : number) => void

}

export const RattingContext = createContext<RattingContextType | null>(null)

export function RattingContextProvider({children}:{children:ReactNode}){

    const [userRatting , setUserRatting] = useState<Record<number,number>>({});


    function Ratte(id:number , ratting:number){
       setUserRatting(prev=> ({ ...prev , [id] : ratting}))
    }



    return (
        <RattingContext.Provider value={{ userRatting , Ratte}}>
          {children}
        </RattingContext.Provider>
    )
}