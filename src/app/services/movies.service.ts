import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor() {}

  private http = inject(HttpClient);

  //url para el servicio index
  private urlBase = environment.apiURL + '/api/all';
  //private urlIndex = 'http://127.0.0.1:8000/api/all';
  //private urlMovie = 'http://127.0.0.1:8000/api/movie/';

  public getMovies() {
    return this.http.get<any>(this.urlBase);
  }

  /*public movieDescription(id: any) {
    return this.http.get<any>(this.urlMovie + id);
  }*/
}
