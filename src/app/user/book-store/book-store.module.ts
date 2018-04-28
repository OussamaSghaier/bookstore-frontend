import { ProductSearchPipe } from './list-books/Filters/ProductSearchPipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { GetBooksService } from './services/get-books.service';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import {FormsModule} from '@angular/forms';
import { SummaryPipe } from './pipes/summary.pipe';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    MenuComponent
  ]
  ,
  declarations: [HomeComponent, ListBooksComponent, MenuComponent, MenuComponent, ProductSearchPipe, SummaryPipe, BookDetailsComponent],
  providers: [GetBooksService]
})
export class BookStoreModule { }
