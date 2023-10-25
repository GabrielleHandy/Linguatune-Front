import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { StudypageComponent } from './studypage/studypage.component';
import { CardsComponent } from './cards/cards.component';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:"settings", component: SettingsComponent},
  {path: "studypage/:id", component: StudypageComponent ,children :[ {path:'cards' , component:CardsComponent}, {path:'music', component:MusicComponent}, ]},
  {path:'cards/:id/', component:CardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
