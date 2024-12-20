import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from '../common/authService/auth.service';
import { CommonService } from '../common/commonServices/common.service';
import { NgClass, NgIf } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HttpService } from '../common/commonServices/http.service';
import { url } from 'node:inspector';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [NgIf, NgClass, ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css',
})
export class LogInComponent implements OnInit {
  public togglePageLogInSignUp: boolean = false;

  public logInForm!: FormGroup;
  public registrationForm!: FormGroup;

  constructor(
    private router: Router,
    private authSer: authService,
    private commonS: CommonService,
    private httpc: HttpService
  ) {}

  ngOnInit() {
    this.createFormBuilder();
  }

  createFormBuilder() {
    // create validtion for logIn form
    this.logInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });

    // create validation for Register Page
    this.registrationForm = new FormGroup({
      user_name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25),
        Validators.pattern('^[a-zA-Z0-9]*$'),
      ]),
      phone_number: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]{10}$/),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  resetForm() {
    this.registrationForm.reset({
      user_name: '',
      phone_number: '',
      email: '',
      password: '',
    });
  }

  onSubmit(value: any) {
    console.log(value);

    if (value == 'logIn') {
      let logInFormData = {
        user_name: this.logInForm.value.email,
        password: this.logInForm.value.password,
      };

      this.httpc
        .post('http://127.0.0.1:8000/logIn', logInFormData)
        .subscribe((res: any) => {
          console.log(res);
          
          if (res.status_code == 200) {
            console.log('logIn click');
            this.authSer.login();
            this.router.navigate(['/home']);
          }
        });
    } else if (value == 'signUp') {
      if (this.registrationForm.valid) {
        let data = {
          user_name: this.registrationForm.value.user_name,
          phone_number: this.registrationForm.value.phone_number,
          email: this.registrationForm.value.email,
          password: this.registrationForm.value.password,
        };

        console.log(this.registrationForm.value, 'reg form');
        this.httpc
          .post('http://127.0.0.1:8000/signUp', data)
          .subscribe((res: any) => {
            console.log(res.status_code);
            if (res.status_code == 201) {
              this.resetForm();
              this.togglePageLogInSignUp = false;
            }
          });
      }
    }
  }

  logIn() {
    this.authSer.login();

    this.router.navigate(['/home']);

    this.commonS.userLogIn();

    if (this.commonS.isLogIn) {
      this.commonS.userLogIn();
      console.log(this.commonS.isLogIn);
    }
  }
}
