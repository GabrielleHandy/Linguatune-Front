import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient, private authService: AuthServiceService) {}

  getStacks (id: string){
    const backendUrl = `http://localhost:1234/api/stacks/studypage/${id}`
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage["token"]}`,
    });
    return this.http.get(backendUrl, {headers: headers})

  }

  getStackById(id: string){
    const backendUrl = `http://localhost:1234/api/stacks/${id}`
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${sessionStorage["token"]}`,
    });

    return this.http.get(backendUrl, {headers: headers});
  }
}
