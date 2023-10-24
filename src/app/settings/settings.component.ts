import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  @ViewChild('deleteConfirmationModal')
  deleteConfirmationModal!: ElementRef;

  constructor(private el : ElementRef) {}

  signOut() {
    // Implement the sign-out functionality here
    // You may use a service or an authentication library
    console.log('Sign Out clicked');
  }

  updateUser(){
    // Implement the update user functionality here
  }

  deleteAccount() {
    // Implement the delete account functionality here
    // You should show a confirmation dialog before proceeding
    console.log('Delete Account clicked');
  }
}
