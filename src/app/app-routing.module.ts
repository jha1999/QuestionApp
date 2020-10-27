import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component'
import { AuthGuard } from './auth/services/auth.guard'
import { DashboardComponent } from './components/dashboard/dashboard.component'
// import { AddquestionComponent } from './components/addquestion/addquestion.component'
import { ProfileComponent } from './components/profile/profile.component'
import { FormComponent } from './components/form/form.component'

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // canActivate: [AuthGuard]
  },
  // {
  //   path: 'dashboard',
  //   component: DashboardComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'addQuestion',
  //   component: FormComponent,
  //   // canActivate: [AuthGuard]
  // },
  {
    path: 'profile',
    component: ProfileComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'form',
    component: FormComponent,
    // canActivate: [AuthGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
