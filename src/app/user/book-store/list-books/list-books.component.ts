import { IBook } from './model/IBook';
import { GetBooksService } from './../services/get-books.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// https://bootsnipp.com/snippets/1K0md

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  public books: IBook ;
  public filter: string;

  constructor(public getBooksService: GetBooksService) { }

  ngOnInit() {
    this.getBooksService.getBooks().subscribe(
      data => {
        console.log(data);
        this.books = data as IBook;
      },
      err => console.error(err + ' *********'),
      () => console.log('done loading json')
      );


  }

}
