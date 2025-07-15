import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  product1 = {productId:1, productName:'Bardak', categoryId:1, unitPrice:5}
  product2 = {productId:2, productName:'Tabak', categoryId:1, unitPrice:5}
  product3 = {productId:3, productName:'Canak', categoryId:1, unitPrice:5}
  product4 = {productId:4, productName:'Kasik', categoryId:1, unitPrice:5}
  product5 = {productId:5, productName:'Bicak', categoryId:1, unitPrice:5}

  products=[
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5
  ]
}
