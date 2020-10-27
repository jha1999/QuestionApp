// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
// // import { privateDecrypt } from 'crypto';

// @Component({
//   selector: 'app-addquestion',
//   templateUrl: './addquestion.component.html',
//   styleUrls: ['./addquestion.component.css']
// })
// export class AddquestionComponent  {
//   disableSelect = new FormControl(false);

//   addquestionForm: FormGroup

//   constructor(
//     private fb: FormBuilder
//   ) {}

//   ngOnInit(): void {
//     this.addquestionForm = this.fb.group({
//       question: ['', Validators.required],
//       difficultylevel: ['', Validators.required],
//       module: ['', Validators.required],
//       maxmarks: ['', Validators.required],
//       taxonomy: ['', Validators.required]
//     })
//   }

//   onSubmit(){
//     console.log(this.addquestionForm.value);
//   }
// }