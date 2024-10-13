import { Component } from '@angular/core';
import { log } from 'node:console';

@Component({
  selector: 'app-my-profile-card-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './my-profile-card-user-profile.component.html',
  styleUrl: './my-profile-card-user-profile.component.css'
})
export class MyProfileCardUserProfileComponent {

  constructor(){
    console.log("load my pro");
    
  }

}
