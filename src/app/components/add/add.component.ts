import { Component, inject } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  moviesService = inject(MoviesService);
  newMovie = {
    title: '',
    synopsis: '',
    year: <number>0,
    cover: '',
  };

  addMovie() {
    this.moviesService.newMovie(this.newMovie).subscribe();
  }
}
