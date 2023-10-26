import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  

  constructor(private el : ElementRef, private authService:AuthServiceService) {}

  signOut() {
    //TODO Implement the signout functionality here
    this.authService.logoutUser();
  }

  updateUser(){
    //TODO Implement the update user functionality here
  }

  deleteAccount() {
   //TODO Implement the delete user functionality here
    console.log('Delete Account clicked');
  }
}
