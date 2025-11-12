import type { moviesDataType } from '../types/MovieDataType';
import type { TMDBMovie } from '../types/MovieDataType';

import axios from 'axios';
import { useState , useEffect} from 'react';

import { useEffect , useState } from "react";



useEffect(() => {
   FetchMovieData()
}, []);

async function FetchMovieData() {
const [Movies , setMovies] = useState<moviesDataType[] | null>(null)

  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=48c7cae7bad0d7bfd809b07356e38b45`,
  );

  const data = res.data.results[0];
  console.log(data);

  const rawData = data.map( (movie:TMDBMovie) => ({

    id: movie.id,
    title: movie.title,
    description: movie.overview,
    poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    backdrop: `https://image.tmdb.org/t/p/original${movie.backdrop_path}`,
    rating: movie.vote_average,
    releaseDate: movie.release_date,
    genres: movie.genre_ids,

  }));
  setMovies(rawData)

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

