import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from '../common/authService/auth.service';
import { CommonService } from '../common/commonServices/common.service';
import { NgClass, NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../common/commonServices/http.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [NgIf , NgClass ,ReactiveFormsModule ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent implements OnInit {

  public togglePageLogInSignUp:boolean = false;

  public logInForm!: FormGroup;
  public registrationForm!: FormGroup;

  constructor(private router:Router , private authSer:authService , private commonS:CommonService){
    
  }

  ngOnInit(){
  
    this.createFormBuilder();
  }


  createFormBuilder(){

    // create validtion for logIn form 
    this.logInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });

    // create validation for Register Page 
    this.registrationForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.pattern('^[a-zA-Z0-9]*$')
      ]),
      mobile: new FormControl('', [Validators.required,
        Validators.pattern(/^[0-9]{10}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,
        Validators.minLength(8)]),
    });


  }

  onSubmit(value:any) {

    if(value == 'logIn'){

      console.log('logIn click');
      this.authSer.login();
      // this.router.navigate([]);
      this.router.navigate(['/home']);

      
    // if (this.logInForm.valid) {
    //   // admin
    //   console.log("log in valid");
    //   this.router.navigate(['/admin']);
    //   // this.router.navigate(['/log-in']);

    // }

    }
    
    else if(value == 'signUp'){

      if(this.registrationForm.valid){
        
        
      }
     

    }

  }

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
