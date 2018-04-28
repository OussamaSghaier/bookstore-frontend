import {AfterViewInit, Component, ElementRef, Inject, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements AfterViewInit, OnInit {

  @Input()
  public alerts: Array<Object> = [];
  constructor(public authService: AuthService, public router: Router,
              public elementRef: ElementRef, @Inject(DOCUMENT) public document) {
  }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/admin']);
    }
  }

  login(mail: HTMLInputElement, password: HTMLInputElement) {

    this.authService.login(mail.value, password.value).subscribe(res => {
        this.router.navigate(['/admin']);
      },
      error => {
        this.alert({
          type: 'danger',
          message: error.message,
          timeout: 300000
        });
        console.log(error);
      });
  }

  ngAfterViewInit() {
    this.loadScript();
  }

  loadScript() {
    const scripts = [
      'assets/plugins/bootstrap/js/bootstrap.min.js',
      'assets/plugins/3d-bold-navigation/js/modernizr.js',
      'assets/plugins/offcanvasmenueffects/js/snap.svg-min.js',
      'assets/plugins/jquery-blockui/jquery.blockui.js',
      'assets/plugins/pace-master/pace.min.js',
      'assets/plugins/switchery/switchery.min.js',
      'assets/plugins/uniform/jquery.uniform.min.js',
      'assets/plugins/offcanvasmenueffects/js/classie.js',
      'assets/plugins/waves/waves.min.js',
      'assets/plugins/3d-bold-navigation/js/main.js',
      'assets/js/modern.min.js'];

    scripts.forEach((script) => {
      const node = this.document.createElement('script');
      node.type = 'text/javascript';
      node.src = script;
      this.elementRef.nativeElement.appendChild(node);
    });
  }

  alert(data: any) {
    this.alerts.push(data);
    setTimeout(() => {
      this.alerts.shift()
    }, data.timeout);
  }
}
