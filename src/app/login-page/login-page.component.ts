import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  private _username: string;
  private _password: string;

  get password() {
    return this._password;
  }

  get username() {
    return this._username;
  }

  set password(value:string){
    this._password = value;
  }

  set username(value:string){
    this._username = value;
  }






  constructor() {
    this.username = "";
    this.password = "";
  }

  ngOnInit() {
  }

}
