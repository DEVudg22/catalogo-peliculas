import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './components/movie/movie.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
];
