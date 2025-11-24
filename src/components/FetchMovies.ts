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

