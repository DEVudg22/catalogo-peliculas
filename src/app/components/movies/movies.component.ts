import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [RouterLink, NgFor],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  moviesService = inject(MoviesService);
  movies: any[] = [];

  constructor() {
    this.moviesService.getMovies().subscribe((datos) => {
      this.movies = datos;
    });
  }
}
