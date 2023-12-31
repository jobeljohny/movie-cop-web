import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { SearchData, SearchResult } from './classes/searchResult';
import { Movie } from './classes/Movie';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SearchComponent,
    MovieListComponent,
    MovieInfoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  resultsLoaded = false;
  term: string = '';
  activeMovie: Movie | undefined = undefined;
  movies: Movie[] = [];
  updateResult(searchResult: SearchResult) {
    this.term = searchResult.query;
    if (searchResult.result.movie_count != 0) {
      this.resultsLoaded = true;
      this.movies = searchResult.result.movies;
    }
  }

  updateInfo(movie: Movie) {
    this.activeMovie = movie;
  }

  home(){
    this.resultsLoaded = false;
    this.term ='';
    this.activeMovie = undefined;
    this.movies=[];
  }
}
