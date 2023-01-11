import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
      termsAndCondition: [true],
    })
  }

  navigateToLogin() {
    this.router.navigate(["/profile/login"]);
  }

  saveUserData() {
    this.submitted = true;
    if (this.signUpForm.valid) {
      this.profileService.postUser(this.signUpForm.value).subscribe({
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
