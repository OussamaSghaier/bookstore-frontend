import { Component, OnInit, AfterViewInit , ElementRef, Inject, ViewEncapsulation} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, AfterViewInit {

  constructor(public elementRef: ElementRef,  @Inject(DOCUMENT) public document,
      public cookieService: CookieService, public router:Router) {
    this.connected = this.cookieService.check('my-token');
    console.log('is the user connected?' + this.connected);
  }

      connected:boolean;

  ngOnInit() {
  }

  logout() {
    this.cookieService.delete('my-token');
    this.router.navigate(['/']);
    this.connected = false;
  }

  ngAfterViewInit() {
    const scripts = ['//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js'];

    scripts.forEach((script) => {
      const s = this.document.createElement('script');
      s.type = 'text/javascript';
      s.src = script;
      this.elementRef.nativeElement.appendChild(s);
    });

  }

}
