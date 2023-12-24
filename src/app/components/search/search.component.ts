import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { Output, EventEmitter } from '@angular/core';
import { mockSearchResult } from '../../classes/mock';
import { SearchData, SearchResult } from '../../classes/searchResult';
import { SpinnerComponent } from '../spinner/spinner.component';
import { LoaderService } from '../../services/loader.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, SpinnerComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Output('onResult') updateResult = new EventEmitter<SearchResult>();
  constructor(
    private api: ApiService,
    private loader: LoaderService,
    private toast: ToastrService
  ) {
    setTimeout(() => this.search(''), 10);
  }

  search(movieName: string) {
    // this.updateResult.emit(mockSearchResult);
    // return;
    this.api.search(movieName).subscribe({
      next: (value: any) => {
        const result: SearchResult = {
          query: movieName,
          result: value['data'],
        };
        if (result.result.movie_count == 0) {
          this.showEmptyError(movieName);
        }
        this.updateResult.emit(result);
      },
      error: (err) => {
        this.showGeneralError();
        console.log('emitted an error: ');
        console.error(err);
      },
      // complete: () =>
      //    console.log(done'),
    });
  }

  get Loader() {
    return this.loader;
  }

  showEmptyError(movieName: string) {
    this.toast.error(`No movies found for '${movieName}'`, 'No Results');
  }
showGeneralError(){
  this.toast.error('Connection error occured','Error Occured')
}
}
