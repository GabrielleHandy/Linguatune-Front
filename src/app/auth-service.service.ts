import { Injectable } from '@angular/core';
import { Observable, flatMap, map, throwError } from 'rxjs';
import{HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
   

    private backendUrl = 'http://localhost:1234/auth/users';
    private loggedIn = false;
    private user:any;
    private token:string = '';
    private result:any;
   
  
    constructor(private http: HttpClient, private router: Router) {}
  
    registerUser(userData: any){
      this.result = this.http.post(`${this.backendUrl}/register`, userData)
      this.user = this.result.data;

      return ;
    }
  
    loginUser(credentials: any): Observable<any> {
      return this.http.post(`${this.backendUrl}/login`, credentials).pipe(
        map((result: any) => {
          if (result.message === "Successfully logged in!") {
            
            this.token = result.data;
            sessionStorage.setItem("token", this.token);
            const headers = new HttpHeaders({
              'Authorization': `Bearer ${this.token}`,
            });
            return this.http.get(`${this.backendUrl}/email/${credentials.emailAddress}`, { headers });
          } else {
            // Handle login error
            throw new Error('Login failed');
          }
        })
      );
    }
    
    setUser (userInfo: any)  {
      sessionStorage.setItem('user', JSON.stringify(userInfo));
      this.loggedIn = true;
    }
  
   
    logoutUser(){
      this.loggedIn = false;
      sessionStorage.clear()
      this.router.navigateByUrl(''); 
    }

    isLoggedIn(): boolean {
      return sessionStorage.getItem('user')? true : false;
    }

    getUser (){
      
      return JSON.parse(sessionStorage.getItem('user')as string);
    }
}
