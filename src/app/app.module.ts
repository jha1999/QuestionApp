import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { NavigationComponent } from "./components/navigation/navigation.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Angular material component 
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';




import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
// import { AddquestionComponent } from './components/addquestion/addquestion.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormComponent } from './components/form/form.component'
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
// import { AdmindashComponent } from './components/admindash/admindash.component';
// import { AdminformComponent } from './components/adminform/adminform.component';
import { AdminmaganeuserComponent } from './components/adminmaganeuser/adminmaganeuser.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    DashboardComponent,
    // AddquestionComponent,
    ProfileComponent,
    FormComponent,
    // AdmindashComponent,
    // AdminformComponent,
    AdminmaganeuserComponent,
    AdminDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
