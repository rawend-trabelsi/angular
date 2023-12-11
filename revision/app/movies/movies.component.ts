import { Component } from '@angular/core';
import { Movie } from '../model/movie';
import { MovieServiceService } from '../services/movie-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent{
  movies!: Movie[] ;
  constructor(private movieservice: MovieServiceService){
    this.movies =this.movieservice.getMovies()
  }

 
  };
 


