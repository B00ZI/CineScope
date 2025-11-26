import Top15Cards from '../components/Top15Cards';
import { useContext } from 'react';
import { RattingContext } from '../context/rattingContext';
import { useFetch } from '../components/FetchMovies';


export default function Top15() {

const {Movies} = useFetch()
const {userRatting} = useContext(RattingContext)!


const retedKeys = Object.keys(userRatting).map(Number).sort((a, b) => {
  return userRatting[b] - userRatting[a]
})

const ratedMovies = retedKeys.map(ratedId =>{
  return Movies?.find(movie => movie.id === ratedId)
}).filter(Boolean)

// const ratedMovies = Movies?.filter(x =>( retedKeys.includes(x.id)))
  


// console.log(userRatting)

// console.log(retedKeys)
console.log(ratedMovies)

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-15" >
      <h1 className="w-fit text-3xl font-semibold text-white/70 hover:text-white">
        Your Top 15
      </h1>
      <div className='flex flex-col gap-6'>
        {ratedMovies.map( (movie , index) =>( 
           <Top15Cards movie={movie!} index={index} key={index}  ></Top15Cards>
        ) )}
       

      </div>

    </div>
  );
}
