import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import type { moviesDataType } from "../../types/MovieDataType"





export default function RatingDisplay({movie}:{movie: moviesDataType}) {





   

    const userRate = movie.UserRate || 0
    const nums = [1, 2, 3, 4, 5]

    return (
        <>
            {nums.map(num => {
                if (userRate >= num) {
                    return <AiFillStar size={18} className="text-yellow-500 sm:w-5 sm:h-5" />
                }else {
                    return <AiOutlineStar size={18} className="text-white/30 sm:w-5 sm:h-5" /> 
                }
            })}

        </>
    )
}
