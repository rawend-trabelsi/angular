import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { productdata } from './productmodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit(): void {
    // Your initialization code here
  }

  adddata(data: productdata) {
    this.api.addproduct(data).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate(['/product-view']);
      },
      (error) => {
        console.error('Error adding product:', error);
        // Handle error as needed
      }
    );
  }
  
}
