import type { moviesDataType } from '../types/MovieDataType';
import type { TMDBMovie } from '../types/MovieDataType';

import axios from 'axios';
import { useState, useEffect } from 'react';

export function useFetch() {
  const [Movies, setMovies] = useState<moviesDataType[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true; 

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
          poster: movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : null,
          backdrop: movie.backdrop_path
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : null,
          rating: Math.floor(movie.vote_average * 10) / 10,
          date: movie.release_date ? movie.release_date.substring(0, 4) : 'N/A',
        }));
        
        
      
        if (isMounted) {
          setMovies(rawData);
          
        }

      } catch (err) {
        if (isMounted) {
          if (axios.isAxiosError(err)) {
            setError(err.message);
          } else {
            setError('An unknown error occurred.');
          }
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    FetchMovieData();

   
    return () => {
      isMounted = false;
    };
  }, []);

  return { Movies, isLoading, error };
}