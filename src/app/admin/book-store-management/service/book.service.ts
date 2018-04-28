import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Book} from '../model/book.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BookService {

  // URL for CRUD operations
  bookUrl = 'http://localhost:3000/api/books';

  // Create constructor to get Http instance
  constructor(public http: HttpClient ) {
  }
  // Fetch all books
  getAll(): Observable<any> {
    return this.http.get(this.bookUrl)
      .catch(this.handleError);

  }
  // Create Book
  create(book: Book): Observable<any> {
    const cpHeaders = new Headers({ 'Content-Type': 'application/json' });

    const options = new RequestOptions({ headers: cpHeaders });

    return this.http.post(this.bookUrl, book)
      .catch(this.handleError);
  }
  // Fetch book by id
  getById(bookId: string): Observable<any> {
    console.log(this.bookUrl + '/' + bookId);
    return this.http.get(this.bookUrl + '/' + bookId)
      .catch(this.handleError);
  }
  // Update book
  update(book: Book): Observable<any> {
    const cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    const options = new RequestOptions({ headers: cpHeaders });
    return this.http.put(this.bookUrl + '/' + book._id, book)
      .catch(this.handleError);
  }
  // Delete book
  delete(book: Book): Observable<any> {
    return this.http.delete(this.bookUrl + '/' + book._id)
      .catch(this.handleError);
  }

  public handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error);
  }
}
