import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-and-living',
  templateUrl: './home-and-living.component.html',
  styleUrls: ['./home-and-living.component.css']
})
export class HomeAndLivingComponent implements OnInit {
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
