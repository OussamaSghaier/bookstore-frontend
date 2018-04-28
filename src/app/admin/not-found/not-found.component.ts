import { Component,  AfterViewInit , ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements AfterViewInit {

  constructor(public elementRef: ElementRef,
              @Inject(DOCUMENT) public document) { }

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
      // this.elementRef.nativeElement.appendChild(node);
      this.elementRef.nativeElement.appendChild(node);
    });
  }

}
