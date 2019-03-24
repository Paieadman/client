import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../dto/user';
import {AuthorizationService} from '../Services/AuthorizationService';
import {MatButtonModule, MatCheckboxModule, MatDialog, MatInputModule} from '@angular/material';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
  providers: [AuthorizationService]
})
export class AuthorizationComponent implements OnInit {
  user: User;

  constructor(private http: AuthorizationService, private  router: Router, public dialog: MatDialog) {
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
