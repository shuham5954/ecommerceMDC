import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from '../common/authService/auth.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  constructor(private router:Router , private authSer:authService){}

  nextRoute(){
    this.authSer.login();

    this.router.navigate(['/home']);

  }

}
