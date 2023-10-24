import { Component } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  password = '';
  email = '';
  username = '';
  
  signup() {
    console.log('signup');
  
  }
}
