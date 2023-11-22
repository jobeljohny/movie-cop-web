import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-genre-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './genre-stack.component.html',
  styleUrl: './genre-stack.component.scss',
})
export class GenreStackComponent {
  @Input('genres') genres: string[] = [];

  colors = ['#34495E', '#8E44AD', '#DC7633', '#28B463', '#3498DB', '#17A589'];
}
