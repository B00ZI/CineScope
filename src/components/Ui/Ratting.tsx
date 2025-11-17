import { useState } from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';



export default function Ratting() {

  const starlist = [1,2,3,4,5]



  const [ratting, setRatting] = useState(0)



  return (
    <div className="flex gap-1">

      {starlist.map(( star) => {
        if (star <= ratting) {
          return <AiFillStar onClick={() => setRatting(star)} size={32} key={star} className="cursor-pointer  text-yellow-400" />
        } else return <AiOutlineStar onClick={() => setRatting(star)} size={32} key={star} className="cursor-pointer text-yellow-400/30" />
      })}

      <span className="ml-3 flex items-center text-lg font-semibold text-white">
        {ratting}/5
      </span>

    </div>
  )
}

/* <AiFillStar size={32} className="cursor-pointer  text-yellow-400" /> */
/* <AiOutlineStar size={32} className="text-white/30" /> */
