import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { productdata } from '../add-product/productmodel';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  dataid!: string; // Initialize dataid as string
  public product: productdata = {} as productdata;

  constructor(private api: ApiService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.dataid = this.route.snapshot.params['id'];
    console.log("Product ID: ", this.dataid);
  
    this.api.getproductbyid(this.dataid).subscribe((data: productdata) => {
      this.product = data;
    });
  }
  

  update() {
    this.api.updateproduct(this.product, +this.dataid).subscribe(() => { // Convert dataid to a number using '+'
      this.router.navigate(['/product-view']);
    });
  }
}
