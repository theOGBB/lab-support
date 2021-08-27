import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { AuthenticateService } from '../authenticate.service';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Login = {
    user_name: "",
    password: ""
  };

  constructor(private authService: AuthenticateService, private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  displayLogin(): void {
    alert("user name: " + this.creds.user_name + "\r\npassword: " + this.creds.password);
  }

  login(): void {
    this.authService.authenticate(this.creds).subscribe(user => { 
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      this.router.navigate(['/']);
    });    
  }
}
