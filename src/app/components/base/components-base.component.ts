import { Component } from '@angular/core';

@Component({
  selector: 'app-components-base',
  templateUrl: './components-base.component.html',
  styleUrls: [
    './components-base.component.css',
    './components-base-768.component.css'
  ]
})
export class ComponentsBaseComponent {
  navbarVisible: boolean = false;

  toggleNavbarVisible() {
    this.navbarVisible = !this.navbarVisible;
  }

}
