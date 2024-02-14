import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  myScroll:boolean = true

  @HostListener('window:scroll')
  onWindowScroll() {
    if (window.scrollY > 35) {
      this.myScroll = false
    }
    else{
      this.myScroll = true
    }

  }




}
