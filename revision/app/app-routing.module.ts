import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';

const routes: Routes = [
  {
    path: 'login',component :LoginComponent 
  },


  {path: 'movies',component :MoviesComponent },
  {path: 'add-movies',component :AddMoviesComponent },
  {path: 'update-movies/:title',component :UpdateMovieComponent },
  {path: '**',redirectTo :'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
