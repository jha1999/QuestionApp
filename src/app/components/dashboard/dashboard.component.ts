import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  addressForm = this.fb.group({
    question: [null, Validators.required],
    stream: [null, Validators.required],
    subject: [null, Validators.required],
    semester: [null, Validators.required],
    module: [null, Validators.required],
    questionType: [null, Validators.required],
    difficultyLevel: [null, Validators.required],
    taxonomyLevel: [null, Validators.required],
    maxmark: [null, Validators.required],
    
  });

  hasUnitNumber = false;

  streams = [
    {name: 'Computers', abbreviation: 'CMPN'},
    {name: 'Electrical', abbreviation: 'ELEC'},
    {name: 'Mechanical', abbreviation: 'MECH'},
    {name: 'Information Technology', abbreviation: 'IT'},
    
  ];
  subjects = [
    {name: 'AOA', abbreviation: 'CMPN'},
    {name: 'AISC', abbreviation: 'ELEC'},
    {name: 'ASDF', abbreviation: 'MECH'},
    {name: 'CSL', abbreviation: 'IT'},
    
  ];
  semesters = [
    {name: 'SEM 1', abbreviation: 'CMPN'},
    {name: 'SEM 2', abbreviation: 'ELEC'},
    {name: 'SEM 3', abbreviation: 'MECH'},
    {name: 'SEM 4', abbreviation: 'IT'},
    
  ];
  modules = [
    {name: 'Template 1', abbreviation: 'CMPN'},
    {name: 'Template 2', abbreviation: 'ELEC'},
    
    
  ];
  questionTypes = [
    {name: 'Short Note', abbreviation: 'CMPN'},
    {name: 'Differentiate', abbreviation: 'ELEC'},
    {name: 'Brief', abbreviation: 'MECH'},
    {name: 'Numerical', abbreviation: 'IT'},
  ];
  difficultyLevels = [
    {name: 'Easy', abbreviation: 'CMPN'},
    {name: 'Moderate', abbreviation: 'ELEC'},
    {name: 'Hard', abbreviation: 'MECH'},
    
    
  ];
  taxonomyLevels = [
    {name: 'Evaluation', abbreviation: 'CMPN'},
    {name: 'Understanding', abbreviation: 'ELEC'},
   
    
  ];
  maxmarks = [
    {name: '80 END SEM', abbreviation: 'CMPN'},
    {name: '20 TERM TEST', abbreviation: 'ELEC'},
   
    
  ];
  
  

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks!');
  }
}