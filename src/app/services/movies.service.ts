import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor() {}

  private http = inject(HttpClient);

  private urlBase = environment.apiURL + '/api/all';

  public getMovies() {
    return this.http.get<any>(this.urlBase);
  }
}
