import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Params } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  moviesService = inject(MoviesService);
  movie: any;
  idMovie: any = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => (this.idMovie = params['id']));
    this.moviesService.movieDescription(this.idMovie).subscribe((datos) => {
      this.movie = datos;
    });
  }
}
