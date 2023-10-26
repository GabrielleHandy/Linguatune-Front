import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthServiceService) {}

  getPages (){
    const backendUrl = "http://localhost:1234/api/studypages/"
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage["token"]}`,
    });
    return this.http.get(backendUrl, {headers: headers})

  }
  
}
