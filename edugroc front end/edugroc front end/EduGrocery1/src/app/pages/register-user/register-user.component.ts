import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  signupUsers: any[] = [];
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private httpClient: HttpClient, private router: Router) { }
  
  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  onSignUp() {
    const bodyData = {
      "username": this.username,
      "email": this.email,
      "password": this.password
    };

    this.httpClient.post("http://localhost:8080/user/register", bodyData, { responseType: 'text' })
      .pipe(
        catchError(error => {
          console.error('Error during registration:', error);
          return throwError('Registration failed. Please try again.'); // Customize the error message as needed
        })
      )
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert("Registered Successfully");
      });
  }

  onLogin() {
    const bodyData = {
      email: this.email,
      password: this.password,
    };

    this.httpClient.post("http://localhost:8080/user/login", bodyData)
      .pipe(
        catchError(error => {
          console.error('Error during login:', error);
          return throwError('Login failed. Please try again.'); // Customize the error message as needed
        })
      )
      .subscribe((resultData: any) => {
        console.log(resultData);

        if (resultData.message == "Email not exists") {
          alert("Email not exists");
        } else if (resultData.message == "Login Success") {
          this.router.navigateByUrl('/menu');
          console.log('Navigating to /menu');

        } else {
          alert("Incorrect Email or Password");
        }
      });
  }
}
