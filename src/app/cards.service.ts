import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private headers = new HttpHeaders({
    'Authorization': `Bearer ${sessionStorage["token"]}`,
  });
  constructor(private http: HttpClient, private authService: AuthServiceService) {}

  getStacks (id: string){
    const backendUrl = `http://localhost:1234/api/stacks/studypage/${id}`
    
    return this.http.get(backendUrl, {headers: this.headers})

  }

  getStackById(id: string){
    const backendUrl = `http://localhost:1234/api/stacks/${id}`
   

    return this.http.get(backendUrl, {headers: this.headers});
  }

  getCards(id: string){
    const backendUrl = `http://localhost:1234/api/flashcards/stack/${id}`
    return this.http.get(backendUrl, {headers: this.headers});
  }

  makeCard(card:any, stackId: string){
    const backendUrl = `http://localhost:1234/api/flashcards/create/${stackId}`
    return this.http.post(backendUrl, {headers: this.headers, body: JSON.stringify(card)});

  }

  updateCard(correct: boolean, id: string){
    const card:any = {};
    
    card['correct'] = correct;
    const backendUrl = `http://localhost:1234/api/flashcards/update/${id}`

   
  }
}