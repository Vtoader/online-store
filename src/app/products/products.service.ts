import { Injectable } from '@angular/core';
import { Product } from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    cartProducts: Product[] = [];
  cartChanged(product: Product){
   this.cartProducts.push(product);
  }

  constructor() { }
}
