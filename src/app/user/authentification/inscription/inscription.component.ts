import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { createWiresService } from 'selenium-webdriver/firefox';
import {signupService} from "../services/signup.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  public user: User;
  public confirmpwd:string;

  constructor(public signservice: signupService, public router: Router) {
    this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit() {


      console.log((this.user as User));
      if (this.user.password !== this.confirmpwd) {
      console.log("error inscription : password do not match");
      return ;
    }

      if (! this.validateEmail(this.user.email)) {
          console.log("Please give a valid Email Address ...");
      }

        this.signservice.signup(this.user).subscribe(res =>

        {
            console.log(res);
            if (res['message'] == "Created user successfully")
                this.router.navigate(['/']);
            else
                console.log('Error in Sign Up !!')

        });

  }




  validateEmail(email) {
      var re = /\S+@\S+/;
      return re.test(email);
}

}
