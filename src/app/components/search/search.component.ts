import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Output, EventEmitter } from '@angular/core';
import { mockSearchResult } from '../../classes/mock';
import { SearchData, SearchResult } from '../../classes/searchResult';
import { SpinnerComponent } from '../spinner/spinner.component';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Output('onResult') updateResult = new EventEmitter<SearchResult>();
  constructor(private api: ApiService, private loader: LoaderService) {}
  search(movieName: string) {
    //this.updateResult.emit(mockSearchResult);
    //  return;
    this.api.search(movieName).subscribe({
      next: (value: any) => {
        const result: SearchResult = {
          query: movieName,
          result: value['data'],
        };

        this.updateResult.emit(result);
      },
      error: (err) => {
        console.log('emitted an error: ');
        console.error(err);
      },
      // complete: () =>
      //    console.log(done'),
    });
  }

  get Loader(){
    return this.loader;
  }

}
