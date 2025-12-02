import Top15Cards from '../components/Top15Cards';
import { useContext } from 'react';
import { RattingContext } from '../context/rattingContext';



export default function Top15() {


  const { userRatting } = useContext(RattingContext)!

 
  const userRattingSorted = userRatting
    .slice()
    .sort((a, b) => {

       return (b.UserRate || 0) - (a.UserRate || 0)
      
    })
    .slice(0, 15)

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-15" >
      <h1 className="w-fit text-3xl font-semibold text-white/70 hover:text-white">
        Your Top 15
      </h1>
      <div className='flex flex-col gap-6'>
        {userRattingSorted.map((movie, index) => (
          <Top15Cards movie={movie} index={index} key={index}  ></Top15Cards>
        ))}
      </div>

    </div>
  );
}
