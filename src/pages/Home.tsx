import MovieCards from '../components/MovieCards';
import HomeHero from '../components/HomeHero';

export default function Home() {
  return (
    <div className="flex flex-col gap-15">
      <header>
        <HomeHero></HomeHero>
      </header>

      <main className='flex flex-col gap-10'>
        <h2 className="text-3xl w-fit  text-white/70 hover:text-white font-semibold">All Movies</h2>
        <MovieCards></MovieCards>
      </main>
    </div>
  );
}
