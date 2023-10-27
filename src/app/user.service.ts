import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { CardsService } from './cards.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage["token"]}`,
  });
  constructor(private http: HttpClient, private authService: AuthServiceService) {}

  getPages (){
    const backendUrl = "http://localhost:1234/api/studypages/"
    
    return this.http.get(backendUrl, {headers: this.headers})

  }
  getPageById(id: string){
    const backendUrl = `http://localhost:1234/api/studypages/${id}`
    
    return this.http.get(backendUrl, {headers: this.headers})

  }
  getSong(id:string){
    const backendUrl = `http://localhost:1234/api/songs/${id}`
    return this.http.get(backendUrl, {headers: this.headers})
  }
  getSongTranslation(songId: string){
    const backendUrl = `http://localhost:1234/api/translations/song/${songId}`
    return this.http.get(backendUrl, {headers: this.headers})

  }
 
  getFrenchSongs(){
    const backendUrl = `http://localhost:1234/api/songs/French`
    return this.http.get(backendUrl, {headers: this.headers})
  }

  getSpanishSongs(){
    const backendUrl = `http://localhost:1234/api/songs/Spanish`
    return this.http.get(backendUrl, {headers: this.headers})


  }
}
