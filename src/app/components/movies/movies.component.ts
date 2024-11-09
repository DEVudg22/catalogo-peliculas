import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { NgFor } from '@angular/common';
import { AddComponent } from '../add/add.component';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [RouterLink, NgFor, AddComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent {
  moviesService = inject(MoviesService);
  movies: any[] = [];
  totalPeliculas: number = 0;

  constructor() {
    this.moviesService.getMovies().subscribe((datos) => {
      this.movies = datos;
      this.totalPeliculas = this.movies.length;
    });
  }

  redirect() {
    location.reload();
  }
}
