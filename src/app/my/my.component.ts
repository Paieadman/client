import {Component, OnInit} from '@angular/core';
import {SessionService} from '../Services/SessionService';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {Order} from '../dto/Order';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css'],
  providers: [SessionService]
})
export class MyComponent implements OnInit {

  orders: Order[] = [];
  panelOpenState = false;
  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router,
              private sessionService: SessionService) {
  }

  ngOnInit() {
    let that = this;
    that.sessionService.checkSession(() => {
      this.http.get('http://localhost:8080/orders/' + this.sessionService.getId() + '/all').subscribe((resp: Order[]) => {
        // this.orders = resp;
        this.enrichOrders(resp);
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
