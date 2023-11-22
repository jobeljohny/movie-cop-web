import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Output, EventEmitter } from '@angular/core';
import { mockSearchResult } from '../../classes/mock';
import { SearchResult } from '../../classes/searchResult';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Output('onResult') updateResult = new EventEmitter<SearchResult>();
  constructor(private api: ApiService) {
    //TODO remove
    setTimeout(() => {
      this.search('test');
    }, 100);
  }
  search(movieName: string) {
    this.updateResult.emit(mockSearchResult);
    return;
    this.api.search(movieName).subscribe({
      next: (value: any) => {
        this.updateResult.emit(value['data']);
      },
      error: (err) => {
        console.log('emitted an error: ');
        console.error(err);
      },
      // complete: () =>
      //    console.log(done'),
    });
  }
}
