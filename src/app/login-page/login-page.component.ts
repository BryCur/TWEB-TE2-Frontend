import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  constructor(private http: HttpClient) { }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  errorText = '';

  private url = 'todefine'; // TODO

  hide = true;

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' : '';
  }

  login() {

    // mettre les paramètres dans le corps de la requête  
    this.errorText = '';

    this.http.post(this.url, { email: this.email.value, password: this.password.value })
      .subscribe((res: { jwt: string }) => {
        /*
        sessionStorage.setItem('token', res.jwt);
        window.location.href = '/Nav';
        console.log("Login : ", 'Success');
*/
      }, (error) => {
        this.errorText = error.error;
        console.log("Login : ", "Fail");
        console.log("Login : ", this.errorText);
      });
  }

}
