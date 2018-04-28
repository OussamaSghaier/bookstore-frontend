import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import {BookManagerComponent} from '../admin/book-store-management/book-manager/book-manager.component';
import {HomeComponent} from './book-store/home/home.component';
import {InscriptionComponent} from './authentification/inscription/inscription.component';
import {ListBooksComponent} from './book-store/list-books/list-books.component';
import {ProfileComponent} from './authentification/profile/profile.component';
import {BookDetailsComponent} from './book-store/book-details/book-details.component';
import {AuthentificationModule} from './authentification/authentification.module';
import {BookStoreModule} from './book-store/book-store.module';
import {LoginComponent} from "./authentification/login/login.component";
import { CookieService } from 'ngx-cookie-service';

const userRoot: Routes = [
  {
    path: '',
    component: UserComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: '', component: HomeComponent  },
          { path: 'inscription', component: InscriptionComponent  },
          { path: 'login', component: LoginComponent  },
          { path: 'books', component: ListBooksComponent  },
          { path: 'bookdetails', component: BookDetailsComponent  },
          { path: 'profile', component: ProfileComponent  },
        ],
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoot),
    AuthentificationModule,
    BookStoreModule,
  ],
  declarations: [UserComponent],
    providers: [CookieService]
})
export class UserModule { }
