import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class AuthService {
  status: Observable<boolean>;
  observer: Observer<boolean>;

  constructor(public http: Http) {
    this.status = new Observable<boolean>(observer => {
        this.observer = observer;
        this.observer.next(this.isAuthenticated());
      }
    );
  }


  login(email: string, password: string) {
    const url = 'http://localhost:3000';

    const userCredentials = {
      email: email,
      pwd: password
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    const options = new RequestOptions({headers: headers});

    let res;
    return this.http.post(url + '/admin/login', userCredentials, options).map(
      (response) => {
        res = response.json();
        console.log(res);
        window.localStorage.setItem('token', res.token);
        this.changeState(true);
        return res;
      }).catch(
      (error) => {
        console.log('error:', error.json());
        return Observable.throw(error.json());
      });
  }

  logout() {
    window.localStorage.removeItem('token');
  }

  getToken() {
    return window.localStorage.getItem('token')
  }

  changeState(newState: boolean) {
    if (this.observer !== undefined) this.observer.next(newState);
  }

  isAuthenticated() {
    return !!window.localStorage.getItem('token');
  }

}
