import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BookManagerComponent } from './book-manager/book-manager.component';
import {BookService} from './service/book.service';
import {AlertEmiterService} from './service/alert.emmiter.service.ts.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    BookService,
    AlertEmiterService
  ],
  declarations: [BookManagerComponent]
})
export class BookStoreManagementModule { }
