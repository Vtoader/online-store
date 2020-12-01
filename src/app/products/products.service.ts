import { Injectable } from '@angular/core';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
import { Product } from './model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
    cartProducts: Product[] = [];
  cartChanged(product: Product){
    if(this.cartProducts.find(elem => elem.title == product.title)){
      product.quantity += 1;
    } else {
      this.cartProducts.push(product);
    }
  }

  constructor() { }
}
