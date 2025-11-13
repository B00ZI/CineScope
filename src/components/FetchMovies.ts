import type { moviesDataType } from '../types/MovieDataType';
import type { TMDBMovie } from '../types/MovieDataType';

import axios from 'axios';
import { useState, useEffect } from 'react';



export function useFetch() {

  const [Movies, setMovies] = useState<moviesDataType[] | null>(null)
  const [isLouding, setIsLouding] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {

    async function FetchMovieData() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=48c7cae7bad0d7bfd809b07356e38b45`,
        );

        const data = res.data.results;
        console.log(data)
        const rawData = data.map((movie: TMDBMovie) => ({

          id: movie.id,
          title: movie.title,
          overview: movie.overview,
          poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          backdrop: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
          rating: Math.floor(movie.vote_average * 10 ) / 10 ,
          date: movie.release_date .match(/\d{4}/),
          genres: movie.genre_ids,

        }))
        setMovies(rawData)

      } catch (err) {
        setError("error ---")
      } finally {
        setIsLouding(false)
      }
    }
    FetchMovieData()
  }, []);

 return {Movies , isLouding , error}
}




// export const moviesData: moviesDataType[] = [
//   { id: 1, name: 'marve', rating: 8.4, date: 2020, catig: ['djfn'] },
//   { id: 2, name: 'soko', rating: 3.3, date: 2012, catig: ['action', 'djfn'] },
//   {
//     id: 3,
//     name: 'marka',
//     rating: 8.6,
//     date: 2030,
//     catig: ['action', 'ndo', 'djfn'],
//   },
//   {
//     id: 4,
//     name: 'dinma',
//     rating: 6.2,
//     date: 2015,
//     catig: ['dk', 'cood', 'djfn'],
//   },
//   {
//     id: 5,
//     name: 'dinma',
//     rating: 6.2,
//     date: 2015,
//     catig: ['losdk', 'brid', 'djfn'],
//   },
//   {
//     id: 6,
//     name: 'dinma',
//     rating: 6.2,
//     date: 2015,
//     catig: ['aldction', 'cood', 'djfn'],
//   },
//   {
//     id: 7,
//     name: 'dinma',
//     rating: 6.2,
//     date: 2015,
//     catig: ['actkdion', 'fgn', 'djfn'],
//   },
// ];

