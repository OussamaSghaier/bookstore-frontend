import { Component, OnInit, AfterViewInit , ElementRef, Inject, ViewEncapsulation, Input} from '@angular/core';
import { Router} from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import {AlertEmiterService} from '../book-store-management/service/alert.emmiter.service.ts.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit, AfterViewInit  {

  @Input()
  public alerts: Array<Object> = [];


  constructor(public _alertEmiter: AlertEmiterService,
              public elementRef: ElementRef,
              @Inject(DOCUMENT) public document,
              public router: Router) {}


  ngOnInit() {
    this._alertEmiter.dataStr.subscribe(data => {this.alerts.push(data);
      setTimeout(() => {
        this.alerts.shift()
      }, data.timeout);
    });

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
      'assets/plugins/offcanvasmenueffects/js/main.js',
      'assets/plugins/waves/waves.min.js',
      'assets/plugins/3d-bold-navigation/js/main.js',
      'assets/js/modern.min.js'];

    scripts.forEach((script) => {
      const node = this.document.createElement('script');
      node.type = 'text/javascript';
      node.src = script;
      // this.elementRef.nativeElement.appendChild(node);
      this.elementRef.nativeElement.appendChild(node);
    });
  }


  ngAfterViewInit() {
    this.loadScript();
  }

}
