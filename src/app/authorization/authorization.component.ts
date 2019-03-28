import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../dto/user';
import {AuthorizationService} from '../Services/AuthorizationService';
import {MatButtonModule, MatCheckboxModule, MatDialog, MatInputModule} from '@angular/material';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
  providers: [AuthorizationService]
})
export class AuthorizationComponent implements OnInit {
  user: User;

  constructor(private http: AuthorizationService, private  router: Router,
              public dialog: MatDialog, private cookieSevice: CookieService) {
  }

  ngOnInit() {
  }

  tryLogin(login: string, pass: string) {
    this.http.getAuthorization(login, pass).subscribe((userId: number) => {
      if (userId != 0) {
        this.cookieSevice.delete('userId');
        this.cookieSevice.set('userId', userId.toString());
        this.router.navigateByUrl('/orders');
      }
    });
  }

}
