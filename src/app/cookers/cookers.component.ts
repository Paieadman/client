import { Component, OnInit } from '@angular/core';
import {Order} from '../dto/Order';
import {SessionService} from '../service/SessionService';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cookers',
  templateUrl: './cookers.component.html',
  styleUrls: ['./cookers.component.css'],
  providers: [SessionService]
})
export class CookersComponent implements OnInit {

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router,
              private sessionService: SessionService) { }

  private orders: Order[] = [];
  ngOnInit() {
    let that = this;
    that.sessionService.checkSession(() => {
      that.http.get('http://localhost:8080/orders/' + that.sessionService.getId() + '/cook').subscribe((resp: Order[]) => {
        that.enrichOrders(resp);
      });
    });
  }

  enrichOrders(response) {
    response.forEach((order) => {
      this.http.get('http://localhost:8080/get/' + order.id).subscribe((description) => {
        order.description = description;
        this.orders.push(order);
      });
    });
  }

}
