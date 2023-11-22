import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../classes/Movie';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  @Input('movies') movies: Movie[] = [];
  @Output('onClick') onClick: EventEmitter<Movie> = new EventEmitter<Movie>();

  updateInfo(movie: Movie) {
    this.onClick.emit(movie);
  }
}
