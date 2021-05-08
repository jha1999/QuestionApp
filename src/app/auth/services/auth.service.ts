import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from "./user";
import { LocationStrategy } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  get isLoggedIn(){
    return this.loggedIn.asObservable()
  }

  constructor(
    private router: Router,

  ) { }

  login(user: User){
    if(user.username === 'admin' && user.password === 'admin'){
      localStorage.setItem('loggedIn','true')
      localStorage.setItem('role','admin')
      this.loggedIn.next(true)
      this.router.navigate(['/admin/dashboard'])
    }else if(user.username === 'vishnu' && user.password === '12345'){
      localStorage.setItem('loggedIn','true')
      localStorage.setItem('role','user')
      this.loggedIn.next(true)
      this.router.navigate(['/'])
    }
    else if(user.username === 'Shivansh' && user.password === '123456'){
      localStorage.setItem('loggedIn','true')
      localStorage.setItem('role','user')
      this.loggedIn.next(true)
      this.router.navigate(['/'])
    }
    else if(user.username === 'shibu1999@gmail.com' && user.password === '123456'){
      localStorage.setItem('loggedIn','true')
      localStorage.setItem('role','user')
      this.loggedIn.next(true)
      this.router.navigate(['/'])
    }
    else{
      alert("Incorrect Username or Password ")
    }
  }

  logout(){
    this.loggedIn.next(false)
    this.router.navigate(['/auth/login'])
  }

}
