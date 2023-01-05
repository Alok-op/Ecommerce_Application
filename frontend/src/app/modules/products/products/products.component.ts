import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: any = [];
  constructor() { }

  ngOnInit(): void {
    this.productList = [
      {
        productBrand: "Adidas",
        productName: "Cartoon Astronaut T-Shirt",
        productRating: 5,
        productImage: "../../../assets/grey_shirt.jpg",
        productPrice: "$78"
      },
      {
        productBrand: "Adidas",
        productName: "Cartoon Astronaut T-Shirt",
        productRating: 5,
        productImage: "../../../assets/grey_shirt.jpg",
        productPrice: "$78"
      },
      {
        productBrand: "Adidas",
        productName: "Cartoon Astronaut T-Shirt",
        productRating: 5,
        productImage: "../../../assets/grey_shirt.jpg",
        productPrice: "$78"
      },
      {
        productBrand: "Adidas",
        productName: "Cartoon Astronaut T-Shirt",
        productRating: 5,
        productImage: "../../../assets/grey_shirt.jpg",
        productPrice: "$78"
      }
    ]
  }

}
