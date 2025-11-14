
import HomeHero from '../components/HomeHero';
import MovieCardRendrer from '../components/MovieCardRendrer';
import { useFetch } from '../components/FetchMovies';




export default function Home() {


const {Movies} = useFetch()
if (!Movies) return null


  return (
    <div className="flex flex-col gap-15">
      <header>
        <HomeHero></HomeHero>
      </header>

      <main className='flex flex-col gap-10 '>
        <h2 className="text-3xl w-fit  text-white/70 hover:text-white font-semibold">All Movies</h2>
 
        

        
        <MovieCardRendrer Movies={Movies} ></MovieCardRendrer>
    

        
      </main>
      
    </div>
  );
}
