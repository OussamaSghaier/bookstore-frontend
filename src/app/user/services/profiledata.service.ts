import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class ProfiledataService {


  public messageSource = new BehaviorSubject<object>(null);
  currentMessage = this.messageSource.asObservable();

  constructor() {
    this.changeMessage({
        'username' : '',
        'password' : '',

    });
  }

  changeMessage(message) {
    this.messageSource.next(message);
  }


}
