import axios from 'axios';
import { useState, useEffect } from 'react';

export function useDetailsFetch(id : number | null) {
  
  const [Mdetails, setMdetails] = useState<any>();
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
        // console.log(data)
        const formated = {

          movieId : data.id ,
          title : data.title ,
          genres : data.genres.map((x:any) => x.name) ,
          runTime: data.runtime + " min",
          Director: data.credits.crew.find((c:any) => c.job === 'Director').name,
          cast: data.credits.cast.slice(0, 5).map((x:any) => x.name),
        };
        // console.log(formated)
        setMdetails(formated)
      } catch (err) {
        setError("faled to load movie detailes");
      } finally{
        setLoding(false)
      }
    }

    fetchMoviedetail();
  }, [id]);
  return {Mdetails , Loding , error}
}
