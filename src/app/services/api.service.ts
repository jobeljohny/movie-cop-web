import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  readonly link: string = 'https://yts.mx/api/v2/list_movies.json';
  constructor(private http: HttpClient) {}

  search(name: string) {
    const params = { query_term: name, with_images: 'true' };
    return this.http.get(this.link, { params: params });
  }
}
