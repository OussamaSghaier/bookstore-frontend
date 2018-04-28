import {Component, OnInit, Input, Output, EventEmitter, ElementRef, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {Book} from '../model/book.model';
import {BookService} from '../service/book.service';
import {AlertEmiterService} from '../service/alert.emmiter.service.ts.service';

@Component({
  selector: 'app-book-manager',
  templateUrl: './book-manager.component.html',
  styleUrls: ['./book-manager.component.css']
})
export class BookManagerComponent implements OnInit {

  books: Book[] ;
  selectedBook: Book;
  public statusCode: any;

  constructor(public _alertEmiter: AlertEmiterService,
              public elementRef: ElementRef,
              @Inject(DOCUMENT) public document,
              public bookService: BookService) {}

  ngOnInit(): void {
    this.bookService.getAll()
      .subscribe(
        data => {
          this.books = data;
          this._alertEmiter.sendAlert('info', 'data loaded')
        },
        error => {
          this.statusCode = error;
          this._alertEmiter.sendAlert('danger', 'could not contact rest server', 10000)
        });
  }

  new() {
    this.selectedBook = new Book()
  }

  submit(): void {
    if (this.selectedBook._id) {
      this.bookService.update(this.selectedBook).subscribe(
        res => {
          this.books = res.data;
          this._alertEmiter.sendAlert('info', res.message);
          this.selectedBook = null;
        },
        error => {
          this.statusCode = error.status;
          for (let key in error.error.errors) {
            this._alertEmiter.sendAlert('danger', key + ': ' + error.error.errors[key].message, 10000)
          }
        });
    } else {

      this.bookService.create(this.selectedBook).subscribe(
        res => {
          this.books = res.data;
          this._alertEmiter.sendAlert('info', res.message);
          this.selectedBook = null;
        },
        error => {
          this.statusCode = error.status;
          for (let key in error.error.error.errors) {
            this._alertEmiter.sendAlert('danger', key + ': ' + error.error.error.errors[key].message, 10000)
          }
        });
    }


  }

  delete(book: Book): void {
    this.bookService.delete(this.selectedBook).subscribe(
      res => {
        this.books = res.data;
        this._alertEmiter.sendAlert('info', res.message);
        this.selectedBook = null;
      },
    errorCode => this.statusCode = errorCode
  )
    ;
  }



  onSelect(book: Book): void {
    this.selectedBook = book;
  }

  gotoDetail(): void {
    // the router service will help here
  }
}
