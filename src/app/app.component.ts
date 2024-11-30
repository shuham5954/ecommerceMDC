import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { Router} from '@angular/router';
import { NavBarComponent } from "./header/nav-bar/nav-bar.component";
import { HeaderComponent } from "./header/header/header.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgClass, NgIf } from '@angular/common';
import { CommonService } from './common/commonServices/common.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ NgIf , NgClass ,RouterOutlet, NavBarComponent, HeaderComponent,RouterLink,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  public isNavShow = false ;

  constructor(private router:Router , private http:HttpClient , public commonS:CommonService){
    
  }
  ngOnInit(): void {
    this.getNavInfo();
  }

  getNavInfo(){

    this.commonS.isLogIn.subscribe((data) =>{
     this.isNavShow = data;
      console.log(this.isNavShow);
     })
  
}
}
