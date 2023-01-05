import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
