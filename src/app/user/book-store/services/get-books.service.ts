import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GetBooksService {

  public _url: string;

  constructor(public http: HttpClient) {

    // this.url='http://localhost:3000/api/genres';
    this.url = 'http://localhost:3000/api/books';
  }

  get url() {
    return this._url;
  }

  set url(url: string) {
    this._url = url;
  }

  getBooks() {
    console.log('here');
    return this.http.get(this.url);
    // return this.http.get(this.url);

    // .subscribe(data => console.log('yes'));
    /*.subscribe(data => {
      console.log(data);
      //return data
    });*/
  }

}
