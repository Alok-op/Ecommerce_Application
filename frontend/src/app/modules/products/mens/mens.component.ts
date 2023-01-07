import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit {
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
