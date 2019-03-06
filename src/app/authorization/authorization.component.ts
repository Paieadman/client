import { Component, OnInit } from '@angular/core';
import {LogService} from '../smth/LogService';
import {HttpClient} from '@angular/common/http';
import {User} from '../smth/user';
import {AuthorizationService} from '../Services/AuthorizationService';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
  providers: [AuthorizationService]
})
export class AuthorizationComponent implements OnInit {
  user: User;

  constructor(private http: AuthorizationService) {
  }

  ngOnInit() {
  }
  tryLogin(login: string, pass: string) {
    alert(login + pass);
    return this.http.getAuthorization(login, pass);
  }

}
