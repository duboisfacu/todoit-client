import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'client';
  userlogued: boolean = true;
  constructor() {

  }

ngOnInit(): void {
  AOS.init();
  if (localStorage.getItem('token')){
  this.userlogued = false }

}

}
