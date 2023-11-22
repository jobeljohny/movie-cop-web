import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Movie } from '../../classes/Movie';

@Component({
  selector: 'app-movie-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-info.component.html',
  styleUrl: './movie-info.component.scss',
})
export class MovieInfoComponent {
  @Input('movie') movie: Movie | undefined = undefined;
}
