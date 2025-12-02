export interface moviesDataType {
  id: number;
  title: string;
  overview: string;
  poster: string | null;   
  backdrop: string | null;
  rating: number;
  date: string;
  
  UserRate?: number;
}

export interface TMDBMovie  {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null; 
  backdrop_path: string | null; 
  vote_average: number;
  release_date: string;
  genre_ids: number[];
}

export interface FormattedMovieDetails {
  movieId: number;
  title: string;
  genres: string[];
  runTime: string;
  Director: string;
  cast: string[];
}