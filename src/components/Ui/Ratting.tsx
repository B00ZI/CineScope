import { useContext, useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { RattingContext } from '../../context/rattingContext';
import type { moviesDataType } from '../../types/MovieDataType';



export default function Ratting({ movie }: { movie: moviesDataType }) {



  const { userRatting, Ratte } = useContext(RattingContext)!

  const movieratting = userRatting.find(m => m.id === movie.id)?.UserRate || 0

  const starlist = [1, 2, 3, 4, 5]
  const [hoverRating, setHoverRating] = useState(0);
  console.log(userRatting)





  return (
    <div className="flex gap-1"
      onMouseLeave={() => setHoverRating(0)}
    >


      {starlist.map((star) => {

        const isActive = star <= (hoverRating || movieratting)

        if (isActive) {
          return <AiFillStar onMouseEnter={() => { setHoverRating(star) }} onClick={() => Ratte(movie, star)} size={32} key={star} className="cursor-pointer  text-yellow-400" />
        } else return <AiOutlineStar onMouseEnter={() => { setHoverRating(star) }} onClick={() => Ratte(movie, star)} size={32} key={star} className="cursor-pointer text-yellow-400/30" />
      })}

      <span className="ml-3 flex items-center text-lg font-semibold text-white">
        {movieratting}/5
      </span>

    </div>
  )
}

