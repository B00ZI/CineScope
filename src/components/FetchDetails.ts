import axios from 'axios';
import { useState, useEffect } from 'react';

export function useDetailsFetch() {
    const id = 550
  const [details, setdetails] = useState<any>();
  const [Loding, setLoding] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMoviedetail() {
      try {
        setLoding(true);
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?append_to_response=credits&api_key=48c7cae7bad0d7bfd809b07356e38b45`,
        );
        const data = res.data;

        const formated = {
          movieId : data.id ,
          runTime: data.runtime,
          Director: data.credits.crew.find((c) => c.job === 'Director').name,
          cast: data.credits.cast.slice(0, 4).map((x) => x.name),
        };
        console.log(formated)
        setdetails(formated)
      } catch (err) {
        setError("faled to load movie detailes");
      } finally{
        setLoding(false)
      }
    }

    fetchMoviedetail();
  }, [id]);
  return {details , Loding , error}
}
