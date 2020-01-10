import { AuthService } from './../services/oauth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

   menu = document.getElementById('Menudrawer');
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
  }

  openCloseMenu() {

    console.log('teste');
   // this.menu.set
  }
}
