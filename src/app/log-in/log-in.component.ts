import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from '../common/authService/auth.service';
import { CommonService } from '../common/commonServices/common.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  constructor(private router:Router , private authSer:authService , private commonS:CommonService){}

logIn() {

  this.authSer.login();

  this.router.navigate(['/home']);

  this.commonS.userLogIn();
  
  if(this.commonS.isLogIn){
    this.commonS.userLogIn();
    console.log(this.commonS.isLogIn);  
  }
}

}
