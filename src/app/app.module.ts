import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { StudypageComponent } from './studypage/studypage.component';
import { CardsComponent } from './cards/cards.component';
import { MusicComponent } from './music/music.component';
import { SongComponent } from './song/song.component';
import { HttpClientModule } from '@angular/common/http';
import { FlashCardComponent } from './flash-card/flash-card.component';
import { MatPaginatorModule } from '@angular/material/paginator';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    SettingsComponent,
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
    MatPaginatorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
