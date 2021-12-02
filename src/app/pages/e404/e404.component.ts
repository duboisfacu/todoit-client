import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e404',
  templateUrl: './e404.component.html',
  styleUrls: ['./e404.component.sass']
})
export class E404Component implements OnInit {

  navigate(prop:string) {
    this.router.navigate([`/${prop}`]);
}
  constructor(private router: Router) { }
  ngOnInit(): void {
  }

}
