import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor() {}

  private http = inject(HttpClient);

  //objeto con las requests
  private requests = {
    index: environment.apiURL + '/api/all',
    movie: environment.apiURL + '/api/movie/',
    deleteMovie: environment.apiURL + '/api/delete/',
  };

  public getMovies() {
    return this.http.get<any>(this.requests.index);
  }

  public movieDescription(id: any) {
    return this.http.get<any>(this.requests.movie + id);
  }
}
