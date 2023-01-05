import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCardShown: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showCard() {
    this.isCardShown = true;
  }

  navigateToLogin() {
    this.router.navigate(['/profile/login']);
  }

}
