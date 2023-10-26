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
  makeAStack(studypageId: string, stack:any){
    const backendUrl = `http://localhost:1234/api/stacks/create/${studypageId}`
    return this.http.post(backendUrl,stack,{headers: this.headers});
  }

  getStackById(id: string){
    const backendUrl = `http://localhost:1234/api/stacks/${id}`
   

    return this.http.get(backendUrl, {headers: this.headers});
  }
  deleteStackById(id: string){
    const backendUrl = `http://localhost:1234/api/stacks/delete/${id}`

    return this.http.delete(backendUrl, {headers: this.headers});

  }

  getCards(id: string){
    const backendUrl = `http://localhost:1234/api/flashcards/stack/${id}`
    return this.http.get(backendUrl, {headers: this.headers});
  }

  makeCard(card:any, stackId: string, songId: string){
    const backendUrl = `http://localhost:1234/api/flashcards/song/${songId}/create/${stackId}`
    return this.http.post(backendUrl, card,{headers: this.headers});

  }

  updateCard(correct: boolean, id: string){
    const card:any = {};
    
    card['correct'] = correct;
    const backendUrl = `http://localhost:1234/api/flashcards/update/${id}`

   
  }
}
