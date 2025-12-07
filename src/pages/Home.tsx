
import HomeHero from '../components/HomeHero';
import MovieCardRendrer from '../components/MovieCardRendrer';
import { useFetch } from '../components/FetchMovies';




export default function Home() {



  const { Movies, error, isLoading } = useFetch()



  return (
    <div className="flex flex-col gap-16">
      <header>
        <HomeHero></HomeHero>
      </header>

      <main className='flex flex-col gap-10 '>
        <h2 className="text-3xl w-fit text-white/70 hover:text-white font-semibold transition-colors duration-200">
          Popular Movies
        </h2>

        {/* --- LOADING STATE --- */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center min-h-[200px] gap-4">
            {/* The Spinner */}
            <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
            <p className="text-white/50 animate-pulse">Fetching latest movies...</p>
          </div>
        )}

        {/* --- ERROR STATE --- */}
        {error && (
          <div className="flex flex-col items-center justify-center min-h-[400px] p-6">
            <div className="relative overflow-hidden rounded-2xl   backdrop-blur-sm p-8 text-center max-w-md shadow-lg">
              <div className="relative z-10">
                <h3 className="text-white font-bold text-xl mb-2 tracking-tight">
                  Oops! Something went wrong
                </h3>
                <p className="text-white/30 text-sm mb-4 leading-relaxed">
                  {error}
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="flex items-center justify-center gap-2 rounded-xl text-red-300 border border-red/20  backdrop-blur-sm px-6 py-2.5 cursor-pointer text-sm font-semibold transition-all duration-300 hover:scale-105 mx-auto"
                >
                  <span>Try Again</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* --- SUCCESS STATE --- */}
        {!isLoading && !error && Movies && (
          <MovieCardRendrer Movies={Movies} />
        )}
      </main>

    </div>
  );
}
