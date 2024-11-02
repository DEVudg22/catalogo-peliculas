import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
];
