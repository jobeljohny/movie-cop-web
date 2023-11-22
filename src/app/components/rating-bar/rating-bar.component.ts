import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-rating-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating-bar.component.html',
  styleUrl: './rating-bar.component.scss',
})
export class RatingBarComponent {
  @Input('rating') rating: number = 0;

  get Rating() {
    return Math.round(this.rating);
  }
}
