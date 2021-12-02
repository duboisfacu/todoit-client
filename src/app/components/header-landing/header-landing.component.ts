import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-landing',
  templateUrl: './header-landing.component.html',
  styleUrls: ['./header-landing.component.sass']
})
export class HeaderLandingComponent implements OnInit {

  constructor(private router: Router) {

  }
  navigate(prop:string) {
    this.router.navigate([`/${prop}`]);
}

  ngOnInit(): void {
  }

}
