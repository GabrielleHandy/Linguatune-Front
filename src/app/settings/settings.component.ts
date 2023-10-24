import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  

  constructor(private el : ElementRef) {}

  signOut() {
    //TODO Implement the signout functionality here
    console.log('Sign Out clicked');
  }

  updateUser(){
    //TODO Implement the update user functionality here
  }

  deleteAccount() {
   //TODO Implement the delete user functionality here
    console.log('Delete Account clicked');
  }
}
