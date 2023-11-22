import { Movie } from './Movie';

export interface SearchResult {
  movie_count: number;
  limit: number;
  page_number: number;
  movies: Movie[];
}
