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
  data: any;
  signUpForm: FormGroup;

  constructor(
    private router: Router,
    private profileService: ProfileService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      userName: ["", Validators.required],
      email: ["", Validators.required],
      passoword: ["", Validators.required],
      termsAndCondition: ["", Validators.required]
    })
  }

  navigateToLogin() {
    this.router.navigate(["/profile/login"]);
  }

  saveUserData() {
    console.log(this.signUpForm.value);
    return
    this.profileService.postUser(this.data).subscribe((response) => {
      console.log(response);
    })
  }

}
