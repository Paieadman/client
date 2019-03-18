import { Component, OnInit } from '@angular/core';
import {LogService} from '../smth/LogService';
import {HttpClient} from '@angular/common/http';
import {User} from '../smth/user';
import {AuthorizationService} from '../Services/AuthorizationService';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
  providers: [AuthorizationService]
})
export class AuthorizationComponent implements OnInit {
  user: User;

  constructor(private http: AuthorizationService, private  router: Router) {
  }

  ngOnInit() {
  }
  tryLogin(login: string, pass: string) {
    alert(login + pass);
    console.log('try login');
    this.http.getAuthorization(login, pass).subscribe((n: boolean) => {
      if (n == true) {
        console.log('true');
        this.router.navigateByUrl('orders');
      }
    });
  }

}
