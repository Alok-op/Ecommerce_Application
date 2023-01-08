import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  indexValue = 1;
  constructor() { }

  ngOnInit(): void {
    // setInterval(() => {
    //   this.sideSlide(1);
    // }, 2500);
    // this.showImg(this.indexValue);
  }

  btmSlide(e: any) {
    this.showImg(this.indexValue = e)
  }

  sideSlide(e: any) {
    this.showImg(this.indexValue += e);
  }

  showImg(e: any) {
    let i;
    const img = document.querySelectorAll<HTMLElement>("img");
    const sliders = document.querySelectorAll<HTMLElement>(".btm-slider span");

    if (e > img.length) {
      this.indexValue = 1;
    }
    if (e < 1) {
      this.indexValue = img.length;
    }

    for (i = 0; i < img.length; i++) {
      img[i].style.display = 'none';
    }

    for (i = 0; i < sliders.length; i++) {
      sliders[i].style.background = 'rgba(255, 255, 255, 0.1)';
    }

    img[this.indexValue - 1].style.display = "block";
    sliders[this.indexValue - 1].style.background = "white";






  }

}
