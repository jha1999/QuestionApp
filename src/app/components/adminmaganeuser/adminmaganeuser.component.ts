import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
// import { DialogCompComponent } from '../dialog-comp/dialog-comp.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-adminmaganeuser',
  templateUrl: './adminmaganeuser.component.html',
  styleUrls: ['./adminmaganeuser.component.css']
})
export class AdminmaganeuserComponent implements OnInit {

  users =[
    {id: 1, firstName: ' Shivansh', lastName: ' Jha', email: 'shibu1999@gmail.com', signUpDate: '20-03-2021', action: ''},
    {id: 2, firstName: ' Swami', lastName: ' Iyer', email: 'iswami85@gmail.com', signUpDate: '20-04-2021', action: ''},
    {id: 3, firstName: ' Saniya', lastName: ' Kadam', email: 'jksaniya7@gmail.com', signUpDate: '21-04-2021', action: ''},
    {id: 4, firstName: ' Niyati', lastName: ' Jadhav', email: 'jadhavniyu@gmail.com', signUpDate: '21-04-2021', action: ''}

  ] //TBF
  editField: any;
  dataSource = this.users
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'signUpOn', 'action'];


  constructor(
    private authService: AuthService, 
    private dialog: MatDialog,
    private snackBar: MatSnackBar
    ) { }
  

  ngOnInit(): void {
    // this.authService.getUsers()
    // .subscribe(
    //   res => {
    //     this.users = res.message
    //     //console.log(this.users)
    //   },
    //   err => console.log(err)
    // )
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
       duration: 2000,
    });
  }

  remove(id: any){
    
    this.users=this.users.filter(data=>{
      console.log(id)
      return data.id!==id
      
    })
    //console.log(id)
    // this.authService.deleteUser(id)
    // .subscribe(
    //   res => {
    //     if(res["success"] === 1){
    //       this.openSnackBar("User with Id: "+id+" deleted successfully!","Close")
    //       this.ngOnInit()
    //     }
    //   },
    //   err => console.log(err)
    // )
  }

  updateList(id: number, property: string, event: any) {
    
    // const editField = event.target.textContent;
    // //console.log(event)
    // this.authService.updateUser(editField)
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}


