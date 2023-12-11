import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { productdata } from './add-product/productmodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  //addproduct
  addproduct(data: productdata) {
    return this.http.post("http://localhost:3000/product", data)


  }
  //display lproduite
  getproduct() {
    return this.http.get<productdata[]>("http://localhost:3000/product/")
  }
 // Supprimer le produit
deleteproduct(id: number) {
  return this.http.delete("http://localhost:3000/product/" + id);
}
// Mettez à jour le produit
updateproduct(product: productdata, id: number) {
  return this.http.put<productdata>("http://localhost:3000/product/" + id, product);
}

// Obtenez un produit par ID
getproductbyid(id: string) {
  return this.http.get<productdata>("http://localhost:3000/product/" + id);
}
getTotalProducts() {
  return this.http.get<number>('http://localhost:3000/product/count');
}
}

