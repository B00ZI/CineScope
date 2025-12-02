import { createContext } from "react";
import useLocalStorage from "../hooks/LocalStorage";

import type { ReactNode } from "react";
import type { moviesDataType } from "../types/MovieDataType";

interface RattingContextType {
    userRatting: moviesDataType[],
    Ratte: (movie: moviesDataType, ratting: number) => void
}


export const RattingContext = createContext<RattingContextType | null>(null)

export default function RattingContextProvider({ children }: { children: ReactNode }) {

    // const [userRatting, setUserRatting] = useState<moviesDataType[]>([]);
   const [userRatting, setUserRatting] = useLocalStorage<moviesDataType[]>('movieRatings', []);


    function Ratte(movie: moviesDataType, ratting: number) {

        const formated = { ...movie, UserRate: ratting }

        setUserRatting((prev) => {

            const x = prev.findIndex(item => item.id === formated.id)

            if (x > -1) {

                return prev.map((item, index) =>
                    index === x ? formated : item
                )
           

            } else {
                return [...prev, formated]
            }

        })


    }



    return (
        <RattingContext.Provider value={{ userRatting, Ratte }}>
            {children}
        </RattingContext.Provider>
    )
}