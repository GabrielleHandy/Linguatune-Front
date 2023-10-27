import { Component } from '@angular/core';
import { AuthServiceService } from '../../auth-service.service';
import { AuthGuard } from '../../auth.guard';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username: string= "";
  public password: string = ""
  public email: string ='';
  public error: string = "";

  constructor(private authService: AuthServiceService, private router: Router){}
  login() {
    const credentials = {
      emailAddress: this.username,
      password: this.password,
    };

    this.authService.loginUser(credentials).subscribe(
      (result: any) => {
        // Handle the result of the login operation here
        result.subscribe((result: { data: any; }) => {console.log(result.data);
           this.authService.setUser(result.data)
        
         this.router.navigateByUrl('/dashboard'); 
        
        });
       
      },
      (error) => {
        // Handle login error
        this.error = "Login failed";
      }
    );
  }
}
