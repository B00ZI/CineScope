import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { moviesDataType } from "../types/MovieDataType";


interface formated {
    UserRate: number;
    id: number;
    title: string;
    overview: string;
    poster: string;
    backdrop: string;
    rating: number;
    date: string;
    genres: number[];
}

interface RattingContextType {
    userRatting: formated[],
    Ratte: (movie: moviesDataType, ratting: number) => void
}


export const RattingContext = createContext<RattingContextType | null>(null)

export default function RattingContextProvider({ children }: { children: ReactNode }) {

    const [userRatting, setUserRatting] = useState<formated[]>([]);


    function Ratte(movie: moviesDataType, ratting: number) {

        const formated = { ...movie, UserRate: ratting }

        setUserRatting((prev) => {

            const x = prev.findIndex(item => item.id === formated.id)

            if (x > -1) {

                return prev.map((item, index) =>
                    index === x ? formated : item
                )
                return [...prev, formated]

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