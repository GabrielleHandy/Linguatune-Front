import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [LoginComponent, SettingsComponent, SignupComponent, DashboardComponent],
  imports: [
    AppRoutingModule,
    FormsModule,
    CommonModule
  ]
})
export class ProfilePageModule { }
