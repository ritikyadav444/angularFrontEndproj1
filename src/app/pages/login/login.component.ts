import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: Login;

  constructor(private http: HttpClient,private router: Router) {
    this.loginObj = new Login();
  }
onLogin() {
  debugger;
  this.http.post('http://localhost:4001/api/login', this.loginObj).subscribe(
    (res: any) => {
      if (res.success == true) {
        alert("Login Success");
        console.log("login");
        localStorage.setItem('token', res.user.token);
        this.router.navigateByUrl('/dashboard');
      } else {
        alert(res.message || "Login failed");
      }
    },
    (error) => {
      console.error("Login error", error);
      alert("An error occurred during login. Please try again.");
    }
  );
}

}

export class Login { 
    email: string;
    password: string;
    constructor() {
      this.email = '';
      this.password = '';
    } 
}
