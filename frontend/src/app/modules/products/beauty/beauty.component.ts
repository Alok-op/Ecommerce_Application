import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css']
})
export class BeautyComponent implements OnInit {
  productList: any = [];

  constructor(private router: Router) { }

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

  navigateToProductDetails() {
    this.router.navigate(["/products/product-details"]);
  }

}
