import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../classes/Movie';
import { RatingBarComponent } from '../rating-bar/rating-bar.component';
import { getRuntime } from '../../classes/common';
import { GenreStackComponent } from '../genre-stack/genre-stack.component';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, RatingBarComponent, GenreStackComponent],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input('movie') movie!: Movie;

  get Runtime() {
    return getRuntime(this.movie.runtime);
  }
}
