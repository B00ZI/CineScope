import { useContext} from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { RattingContext } from '../../context/rattingContext';




export default function Ratting({id}:{id:number }) {

  

  const{userRatting , Ratte} = useContext(RattingContext)!
  
  const starlist = [1,2,3,4,5]

  console.log (userRatting)





  return (
    <div className="flex gap-1">

      {starlist.map(( star) => {
        if (star <= userRatting[id]) {
          return <AiFillStar onClick={() => Ratte(id , star)} size={32} key={star} className="cursor-pointer  text-yellow-400" />
        } else return <AiOutlineStar onClick={() => Ratte( id ,star)} size={32} key={star} className="cursor-pointer text-yellow-400/30" />
      })}

      <span className="ml-3 flex items-center text-lg font-semibold text-white">
        {userRatting[id]}/5
      </span>

    </div>
  )
}

