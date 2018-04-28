import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import {BookManagerComponent} from './book-store-management/book-manager/book-manager.component';
import {BookStoreManagementModule} from './book-store-management/book-store-management.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NotFoundComponent } from './not-found/not-found.component';
import {AuthGuard} from './auth.guard';
import {AuthService} from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import {RequestInterceptor} from './services/request.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';

const adminRoutes: Routes = [
  {path: 'admin/login',  component: LoginComponent},
  {path: 'admin/404',  component: NotFoundComponent},
  {path: 'admin/logout',  component: LogoutComponent},
  {
    path: 'admin',
    component: AdminComponent,
    // canActivate: [AuthGuard],
    children: [

      { path: 'books', component: BookManagerComponent, canActivate: [AuthGuard] },
      { path: '', redirectTo: 'books', pathMatch: 'prefix' },
      {path: '**', redirectTo: '/admin/404'}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(adminRoutes),
    NgbModule,
    BookStoreManagementModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    }
  ],
  declarations: [AdminComponent, NotFoundComponent, LoginComponent, LogoutComponent]
})
export class AdminModule { }
