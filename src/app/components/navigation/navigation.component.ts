import { Component } from '@angular/core';
// import { AuthService } from "../../auth/services/auth.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

 loggedIn = localStorage.getItem('loggedIn')
 role = localStorage.getItem('role')


  constructor(
    // private authService = AuthService
  ) {}


}
