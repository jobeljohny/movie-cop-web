import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Torrent } from '../../classes/Torrent';

@Component({
  selector: 'app-download-buttons-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './download-buttons-stack.component.html',
  styleUrl: './download-buttons-stack.component.scss',
})
export class DownloadButtonsStackComponent {
  @Input('torrents') torrents: Torrent[] = [];

  download(hash: string) {
    console.log(hash);
  }
}
