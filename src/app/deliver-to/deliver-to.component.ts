import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {SessionService} from '../service/SessionService';
import {Order} from '../dto/Order';
import {Router} from '@angular/router';

@Component({
  selector: 'app-deliver-to',
  templateUrl: './deliver-to.component.html',
  styleUrls: ['./deliver-to.component.css']
})
export class DeliverToComponent implements OnInit {

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router,
              private sessionService: SessionService) {
  }

  private orders: Order[] = [];

  ngOnInit() {
    let that = this;
    that.sessionService.checkSession(() => {
      that.http.get('http://localhost:8080/orders/' + that.sessionService.getId() + '/del').subscribe((resp: Order[]) => {
        that.enrichOrders(resp);
      });
    });
  }

  updateStatus(order: number) {
    this.http.post('http://localhost:8080/' + order + '/order/status/update', this.sessionService.getId()).subscribe((subscription: Order) => {
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
