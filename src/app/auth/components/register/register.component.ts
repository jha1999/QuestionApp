import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  submitted = false

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) { }


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit(){
    const user = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,
      email: this.registerForm.value.email
    }

    this.submitted= true

    if(this.registerForm.valid){
      console.log(this.registerForm.value)
      // this.authService.login(this.registerForm)
    }else{
      console.log("Please fill all the fields");
      
    }

  }
}
