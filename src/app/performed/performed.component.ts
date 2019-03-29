import {Component, OnInit} from '@angular/core';
import {SessionService} from '../service/SessionService';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {Order} from '../dto/Order';

@Component({
  selector: 'app-performed',
  templateUrl: './performed.component.html',
  styleUrls: ['./performed.component.css'],
  providers: [SessionService]
})
export class PerformedComponent implements OnInit {

  orders: Order[] = [];

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router,
              private sessionService: SessionService) {
  }

  ngOnInit() {
    let that = this;
    that.sessionService.checkSession(() => {
      this.http.get('http://localhost:8080/orders/' + this.sessionService.getId() + '/performed').subscribe((resp: Order[]) => {
        this.orders = resp;
      });
    });
  }
}
