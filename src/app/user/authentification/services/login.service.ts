import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../../models/user';
import {Router} from "@angular/router";

@Injectable()
export class LoginService {

  public _url: string;

  constructor(public http: HttpClient, public router: Router) {

    this.url='http://localhost:3000/api/signin';
    // this.url = 'http://localhost:3000/auth/login';
  }

  get url() {
    return this._url;
  }

  set url(url: string) {
    this._url = url;
  }

  signin(user) {
    console.log('sign up service');
    console.log(user);

    return this.http.post(this.url, user);
    // .subscribe(res => console.log(res.json()));
  }

}
