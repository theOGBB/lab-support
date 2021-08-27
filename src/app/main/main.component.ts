import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public user: User

  constructor() { 
    this.user = JSON.parse(localStorage.getItem("loggedInUser") || '{}');
  }

  ngOnInit(): void {
  }

}
