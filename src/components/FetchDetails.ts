import axios from 'axios';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { MovieDetailsContext } from '../context/MovieDetailsContext';
import type { FormattedMovieDetails } from '../types/MovieDataType';

export function useDetailsFetch(id: number | null) {
  const { getMovieById, saveMovieDetails } = useContext(MovieDetailsContext)!;

  const [Mdetails, setMdetails] = useState<FormattedMovieDetails | undefined>(
    undefined,
  );
  const [loading, setloading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    let isMounted = true;

    if (id === null) {
      setMdetails(undefined);
      setloading(false);
      setError(null);
      return;
    }

    const cache = getMovieById(id);
    if (cache) {
      setMdetails(cache);
      setloading(false);
      return;
    }
    async function fetchMoviedetail() {
      try {
        setloading(true);
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits&api_key=48c7cae7bad0d7bfd809b07356e38b45`,
        );
        const data = res.data;
        // console.log(data)
        const formated = {
          movieId: data.id,
          title: data.title,
          genres: data.genres.map((x: any) => x.name),
          runTime: data.runtime + ' min',
          Director:
            data.credits.crew.find((c: any) => c.job === 'Director')?.name ||
            'Unknown',
          cast: data.credits.cast.slice(0, 5).map((x: any) => x.name),
        };
        if (isMounted) {
          saveMovieDetails(id!, formated);
          setMdetails(formated);
        }
      } catch (err) {
        if (isMounted) {
          setError('failed to load movie details');
        }
      } finally {
        if (isMounted) {
          setloading(false);
        }
      }
    }

    fetchMoviedetail();
    return () => {
      isMounted = false;
    };
  }, [id]);
  return { Mdetails, loading, error };
}
