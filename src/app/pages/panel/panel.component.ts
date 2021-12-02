import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.sass']
})
export class PanelComponent implements OnInit {
  title = 'client';
  opened = true
  toggleSidebar() {
    this.opened = !this.opened;
  }
  constructor() {

  }

ngOnInit(): void {
}

}