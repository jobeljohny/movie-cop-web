import { Movie } from './Movie';

export interface SearchData {
  movie_count: number;
  limit: number;
  page_number: number;
  movies: Movie[];
}

export interface SearchResult {
  result: SearchData;
  query: string;
}
