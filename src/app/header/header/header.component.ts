import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet , NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  showMobMenu:boolean = false;
  constructor(private router:Router){

  }
  
  nextRoute(){ this.router.navigate(['/home/user-profiles/user-profile']);  }

  toggleMobMenu(){
    this.showMobMenu = !this.showMobMenu;
  }

}
