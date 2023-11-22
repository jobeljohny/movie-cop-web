import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Torrent } from '../../classes/Torrent';
import { generateMagnetLink } from '../../classes/common';

@Component({
  selector: 'app-download-buttons-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './download-buttons-stack.component.html',
  styleUrl: './download-buttons-stack.component.scss',
})
export class DownloadButtonsStackComponent {
  @Input('torrents') torrents: Torrent[] = [];
  @Input('name') movieName: string = '';

  download(hash: string) {
    const url = generateMagnetLink(hash, this.movieName);
    // window.open(url, '_blank');
    const link = document.createElement('a');
    link.href = url;
    link.click();
    link.remove();
  }
}
