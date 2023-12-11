import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Movie } from '../model/movie';
@Component({
  selector: 'app-add-movies',
  templateUrl: './add-movies.component.html',
  styleUrls: ['./add-movies.component.css']
})
export class AddMoviesComponent {
  myForm :FormGroup;
  moviesService: any;
  constructor(private router:Router){
    this.myForm =new FormGroup({
      title :new FormControl('', [Validators.required]),
      desciption :new FormControl('', [Validators.required]),
      year :new FormControl('', [Validators.required]),
    })
  }
addMovie()
{

   const title = this.myForm.get('title')?.value;
   const description = this.myForm.get('description')?.value;
    const year =this.myForm.get('year')?.value ;
    const movie =new Movie(title ,description, year);
    //add new movie by movies services 
    this.moviesService.addMovie(movie);
    this.router.navigate(['/movies']);
    

}}
