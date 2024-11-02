import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor() {}

  private http = inject(HttpClient);

  //url para el servicio index
  private urlIndex = 'http://127.0.0.1:8000/api/all';
  private urlMovie = 'http://127.0.0.1:8000/api/movie/';

  public getMovies() {
    return this.http.get<any>(this.urlIndex);
  }

  public movieDescription(id: any) {
    return this.http.get<any>(this.urlMovie + id);
  }
}
