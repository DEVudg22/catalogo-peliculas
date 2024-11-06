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
  private urlIndex = environment.apiURL + '/api/all';
  private urlMovie = environment.apiURL + '/api/movie/';

  public getMovies() {
    return this.http.get<any>(this.urlIndex);
  }

  public movieDescription(id: any) {
    return this.http.get<any>(this.urlMovie + id);
  }
}
