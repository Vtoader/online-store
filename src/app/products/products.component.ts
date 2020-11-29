import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from './model/product.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  loadedProducts = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getProducts(params.id)
    });
  }
  getProducts(type: string){
    this.http.get(`http://localhost:3000/${type}`)
    .pipe(
      map(res => {
      let productsArray = [];
      for (const key in res){
        productsArray.push(res[key]);
      }
      return productsArray;
    })
    )
      .subscribe(products => {
        this.loadedProducts = products;
      })
  }
  addToCart(){
    console.log
  }
  

}
