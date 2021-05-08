import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,  Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  addressForm = this.fb.group({
    
    stream: [null, Validators.required],
    subject: [null, Validators.required],
    semester: [null, Validators.required],
    
    // maxmark: [null, Validators.required],
    
  });
  streams = [
    {name: 'Computer Engineering', abbreviation: 'CMPN'},
    {name: 'Eectronics and Telecommunication Engineering', abbreviation: 'EXTC'},
    {name: 'Electronics Engineering', abbreviation: 'ELEC'},
    {name: 'Mechanical Engineering', abbreviation: 'MECH'},
    {name: 'Civil Engineering', abbreviation: 'CIVIL'},
  ];

 

 
  semesters = [
    {name: 'Semester I', abbreviation: 'I'},
    {name: 'Semester II', abbreviation: 'II'},
    {name: 'Semester III', abbreviation: 'III'},
    {name: 'Semester IV', abbreviation: 'IV'},
    {name: 'Semester V', abbreviation: 'V'},
    {name: 'Semester VI', abbreviation: 'VI'},
    {name: 'Semester VII', abbreviation: 'VII'},
    {name: 'Semester VIII', abbreviation: 'VIII'},
  ];

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) { 
    
  }

  stream:string = '';
  subject:string = '';
  
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
  submitStream = () => {
    debugger
    console.log(this.stream)
  }
  submitSubject= () =>{
    this.openSnackBar("Subject Added Sucessfully!","Close")
  }

  // ngOnInit(): void {
  // }

}
