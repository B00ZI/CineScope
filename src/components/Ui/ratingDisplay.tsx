import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { useContext  } from "react"
import { RattingContext } from "../../context/rattingContext"
import type { moviesDataType } from "../../types/MovieDataType"

export default function RatingDisplay({movie}:{movie :moviesDataType }) {


     const { userRatting } = useContext(RattingContext)!

    const userRate = userRatting[movie.id]
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
/* <AiFillStar size={18} className="text-yellow-500 sm:w-5 sm:h-5" />
     <AiFillStar size={18} className="text-yellow-400 sm:w-5 sm:h-5" />
     <AiFillStar size={18} className="text-yellow-400 sm:w-5 sm:h-5" />
     <AiOutlineStar size={18} className="text-white/30 sm:w-5 sm:h-5" /> */