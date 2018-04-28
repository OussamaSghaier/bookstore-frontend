import { ProfiledataService } from '../services/profiledata.service';
import { ProfileComponent } from './profile/profile.component';
// import { AuthService } from 'angular5-social-login';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {signupService} from "./services/signup.service";
import {LoginComponent} from "./login/login.component";
import {LoginService} from "./services/login.service";



@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [
    LoginComponent,
    InscriptionComponent,
    ProfileComponent],
  providers : [
    // AuthService,
    ProfiledataService,
      signupService,
      LoginService,

  ]
})
export class AuthentificationModule { }
