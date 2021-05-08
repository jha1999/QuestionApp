import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  submitted = false
  loggedIn

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  onSubmit(){
    const user = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }

    this.submitted= true

    if(this.loginForm.valid){
      // console.log(this.loginForm.value)
      this.authService.login(this.loginForm.value)
     
      this.loggedIn = localStorage.getItem('loggedIn')
      this.router.navigate['/']
    }else{
      console.log("Please fill all the fields");
    }

  }

}
