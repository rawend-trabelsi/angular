import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent {
  myForm :FormGroup;
  moviesService: any;
  constructor(private router:Router){
    this.myForm =new FormGroup({
      title :new FormControl('', [Validators.required]),
      desciption :new FormControl('', [Validators.required]),
      year :new FormControl('', [Validators.required]),
    })

}
}
