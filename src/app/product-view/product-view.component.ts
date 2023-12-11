// product-view.component.ts

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { PdfService } from '../pdf.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
})
export class ProductViewComponent implements OnInit {
  product: any[] = [];
  filteredProduct: any[] = [];
  searchTerm: string = '';
  totalProducts: number = 0; // Ajout de cette variable

  constructor(private api: ApiService, private pdfService: PdfService) {}

  ngOnInit(): void {
    this.getproductdata();
    this.getTotalProducts(); // Appel de la méthode pour obtenir le total
  }

  getproductdata() {
    this.api.getproduct().subscribe((res) => {
      this.product = res;
      this.filteredProduct = [...this.product];
    });
  }

  deleteproduct(id: number) {
    if (confirm('Are you sure?')) {
      this.api.deleteproduct(id).subscribe(() => {
        this.getproductdata();
        this.getTotalProducts(); // Mettez à jour le total après la suppression
      });
    }
  }

  searchProducts() {
    const searchTermLowerCase = this.searchTerm.trim().toLowerCase();
    this.filteredProduct = this.product.filter((item) =>
      item.productname.toLowerCase().includes(searchTermLowerCase)
    );
  }

  resetSearch() {
    this.searchTerm = '';
    this.filteredProduct = [...this.product];
  }

  getTotalProducts() {
    this.api.getTotalProducts().subscribe((total) => {
      this.totalProducts = total;
    });
  }

  generatePdf(item: any): void {
    const data = [item];
    this.pdfService.generatePdf(data);
  }
}
