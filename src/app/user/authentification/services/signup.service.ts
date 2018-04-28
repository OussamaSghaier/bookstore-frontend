import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../../models/user';
import {Router} from "@angular/router";

@Injectable()
export class signupService {

  public _url: string;

  constructor(public http: HttpClient, public router: Router) {

    // this.url='http://localhost:3000/api/genres';
    this.url = 'http://localhost:3000/api/users';
  }

  get url() {
    return this._url;
  }

  set url(url: string) {
    this._url = url;
  }

  signup(user:User) {
    console.log('sign up service');

    return this.http.post(this.url, user);
    // .subscribe(res => console.log(res.json()));
  }

}
