import { Component } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  password = '';
  email = '';
  username = '';
  
  constructor(private authService: AuthServiceService){}
  signup() {
    let user = {
      userName: this.username,
      password: this.password,
      emailAddress: this.email,
      nativeLanguage: "English",

    }
    this.authService.registerUser(user)
  
  }
}
