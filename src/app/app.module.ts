import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './profile-page/login/login.component';
import { SignupComponent } from './profile-page/signup/signup.component';
import { DashboardComponent } from './profile-page/dashboard/dashboard.component';
import { SettingsComponent } from './profile-page/settings/settings.component';
import { StudypageComponent } from './studypage/studypage.component';
import { CardsComponent } from './cards/cards.component';
import { MusicComponent } from './music/music.component';
import { SongComponent } from './song/song.component';
import { HttpClientModule } from '@angular/common/http';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ProfilePageModule } from './profile-page/profile-page.module';





@NgModule({
  declarations: [
    AppComponent,
    StudypageComponent,
    CardsComponent,
    MusicComponent,
    SongComponent,
    FlashCardComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    ProfilePageModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
