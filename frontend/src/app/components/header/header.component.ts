import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToLogin() {
    this.router.navigate(['/profile/login']);
  }

  navigateToSignUp() {
    this.router.navigate(["/profile/sign-up"])
  }

  navigateToHome() {
    this.router.navigate([""]);
  }

  navigateToShoppingCart() {
    this.router.navigate(["/shopping-cart"]);
  }

}
