import { ProfiledataService } from './../../services/profiledata.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user;

  constructor(public data: ProfiledataService) {

    this.user = {
        'username' : '',
        'password' : '',

    };
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(user => this.user =  user);
    console.log('*************************');
    console.log(this.user);
    console.log('*************************');
  }

  newUser() {
    this.data.changeMessage('Hello from Sibling');
  }

}
