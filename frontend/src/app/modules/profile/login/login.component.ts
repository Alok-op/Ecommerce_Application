import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }

  navigateToSignUp() {
    this.router.navigate(["/profile/sign-up"])
  }

  navigateToForgotPassword() {
    this.router.navigate(["/profile/forgot-password"]);
  }

  userLogin() {
    this.submitted = true;
    if (this.loginForm.valid) {
      this.profileService.postLoginUser(this.loginForm.value).subscribe({
        next: data => {
          console.log(data);
        },
        error: error => {
          console.log(error);
        }
      })
    }
  }

}
