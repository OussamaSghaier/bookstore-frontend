import { RouterModule, Router } from '@angular/router';
import { ProfiledataService } from './../../services/profiledata.service';
import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  message;//transfer/switch data between componenet (login-profile) with services
  username='';
  password='';



  constructor(public data: ProfiledataService, public loginService: LoginService,
        public router: Router, public cookieService: CookieService) {
        }


  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
      // this.cookieService.set( 'Test', 'Hello World' );
      // let cookieValue = this.cookieService.get('Test');
      // const allCookies: {} = this.cookieService.getAll();
      // const cookieExists: boolean = this.cookieService.check('test');
      // this.cookieService.delete('my-token');
  }

  newMessage(message) {
    this.data.changeMessage(message);
  }

  onSubmit()
  {
    if(this.username!='' && this.password!='')
    {
      console.log(this.username+' '+this.password);

    }
    else
      console.log('Please enter your login & your password');

    this.loginService.signin({
        'username' : this.username,
        'password' : this.password,

    }).subscribe(res =>

    {
        console.log("res");
        console.log(res);

        this.cookieService.set( 'my-token', res['token'] );
        this.newMessage({
            'username' : this.username,
            'password' : this.password,

        })
        this.router.navigate(['/profile']);

        if(res['success'] == true)
          console.log('OK');

        //    this.router.navigate(['/']);
    }, err => {
      console.log(err);
        console.log("err");
    });

  }


}
