import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  movies: Movie []=
  [
  new Movie('INception', 'Amind-bending thriller' ,2010),
  new Movie('the shawshanj Redemption', 'Drama and remption' , 1994)
];

  constructor() { }
  getMovies()
  {
    return this.movies;
  }
  addMovie(movie: Movie)
  {
    this.movies.push(movie);
  }
  getMovieById(movieName :string): Movie |undefined 
  {
    return this.movies.find((movie)=>
    movie.title.toLowerCase()===)
  }

}
