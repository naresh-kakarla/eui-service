import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

 private selectedProduct:any;

 setSelectedProduct(product:any):void{
  this.selectedProduct=product
 }

 getSelectedProduct():any{
  return this.selectedProduct
 }
  constructor() { }
}
