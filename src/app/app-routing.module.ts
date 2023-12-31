import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LoginComponent } from './profile-page/login/login.component';
import { SignupComponent } from './profile-page/signup/signup.component';
import { DashboardComponent } from './profile-page/dashboard/dashboard.component';
import { SettingsComponent } from './profile-page/settings/settings.component';
import { StudypageComponent } from './studypage/studypage.component';
import { CardsComponent } from './cards/cards.component';
import { MusicComponent } from './music/music.component';
import { SongComponent } from './song/song.component';
import { AuthGuard } from './auth.guard';
import { FlashCardComponent } from './flash-card/flash-card.component';

const routes: Routes = [
  {path: '',component:DashboardComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:"settings", component: SettingsComponent, canActivate: [AuthGuard]},
  {path: "studypage/:id", component: StudypageComponent,  children :[ {path:'cards' , component:CardsComponent}, {path:'music', component:MusicComponent}, ], canActivate: [AuthGuard]},
  {path:':studyId/cards/:cardId', component:FlashCardComponent, canActivate: [AuthGuard]},
  {path:'song/:id', component:SongComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
