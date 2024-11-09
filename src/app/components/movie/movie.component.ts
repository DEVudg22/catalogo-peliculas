import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Params } from '@angular/router';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [RouterLink, NgIf, FormsModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
})
export class MovieComponent {
  moviesService = inject(MoviesService);
  movie: any;
  idMovie: any = 0;

  updateMovie = {
    title: '',
    synopsis: '',
    year: '',
    cover: '',
  };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => (this.idMovie = params['id']));
    this.moviesService.movieDescription(this.idMovie).subscribe((datos) => {
      this.movie = datos;
      this.updateMovie.title = this.movie.title;
      this.updateMovie.synopsis = this.movie.synopsis;
      this.updateMovie.year = this.movie.year;
      this.updateMovie.cover = this.movie.cover;
    });
  }

  //metodo para eliminar
  borrar(id: any) {
    this.moviesService.deleteMovie(id).subscribe();
  }

  //método para actualizar
  actualizar(id: any) {
    this.moviesService.updateMovie(id, this.updateMovie).subscribe();
  }

  //redireccion
  redirect() {
    this.router.navigate(['/movies']);
  }

  //refrescar
  refresh() {
    location.reload();
  }
}
