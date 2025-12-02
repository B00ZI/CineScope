
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
          All Movies
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
          <div className="flex flex-col items-center justify-center min-h-[200px]">
            <div className="bg-red-500/10 border border-red-500/50 rounded-xl p-6 text-center max-w-md">
              <h3 className="text-red-400 font-bold text-lg mb-2">Oops! Something went wrong</h3>
              <p className="text-white/60 text-sm mb-4">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors text-sm font-medium"
              >
                Try Again
              </button>
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
