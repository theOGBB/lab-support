import { Component, OnInit } from '@angular/core';
import { Login } from './login';
import { AuthenticateService } from '../authenticate.service';
import { User } from '../models/user';

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

  user: User = {
    id: "",
    user_name: "",
    active_token: ""
  };

  constructor(private authService: AuthenticateService) { 
    
  }

  ngOnInit(): void {
  }

  displayLogin(): void {
    alert("user name: " + this.creds.user_name + "\r\npassword: " + this.creds.password);
  }

  login(): void {
    this.authService.authenticate(this.creds).subscribe(user => { 
      alert(JSON.stringify(user)); 
    });    
  }
}
