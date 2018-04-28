import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class AlertEmiterService {

  dataStr = new EventEmitter();

  constructor() { }

  sendAlert( type: string, msg: string, timeout= 5000) {
    this.dataStr.emit({
      type: type,
      message: msg,
      timeout: timeout
    });
  }
}
