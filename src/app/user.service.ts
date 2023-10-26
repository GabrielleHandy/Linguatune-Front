import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

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
  getSong(id:string){
    const backendUrl = `http://localhost:1234/api/songs/${id}`
    return this.http.get(backendUrl, {headers: this.headers})
  }
  
}
