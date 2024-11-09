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
    delete: environment.apiURL + '/api/delete/',
    addMovie: environment.apiURL + '/api/new-movie',
    update: environment.apiURL + '/api/update/',
  };

  public getMovies() {
    return this.http.get<any>(this.requests.index);
  }

  public movieDescription(id: any) {
    return this.http.get<any>(this.requests.movie + id);
  }

  public deleteMovie(id: any) {
    return this.http.delete(this.requests.delete + id);
  }

  public newMovie(add: any) {
    return this.http.post(this.requests.addMovie, add);
  }

  public updateMovie(id: any, add: any) {
    return this.http.put(this.requests.update + id, add);
  }
}
