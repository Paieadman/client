import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../dto/Order';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {SessionService} from '../service/SessionService';
import {User} from '../dto/User';
import {UserAuthorized} from '../dto/UserAuthorized';
import {DtoString} from '../dto/DtoString';

declare var $: any;


@Component({
  selector: 'app-cur-ord',
  templateUrl: './cur-ord.component.html',
  styleUrls: ['./cur-ord.component.css'],
  providers: [SessionService]
})
export class CurOrdComponent implements OnInit {
  orders: Order[] = [];
  private flag: boolean;
  panelOpenState = false;


  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router,
              private sessionService: SessionService) {
  }

  ngOnInit() {
    let that = this;
    that.sessionService.checkSession(() => {
      that.http.get('http://localhost:8080/orders/' + that.sessionService.getId()).subscribe((resp: Order[]) => {
        that.getRole(that.enrichOrders(resp));
        console.log(this.flag);
      });
    });
  }

  remove(num: number) {
    this.http.get('http://localhost:8080/orders/{num}/remove').subscribe(n => console.log(n));
  }

  update(obj: Order, value: string, pos: string) {
    const str: string = 'http://localhost:8080/orders/{' + obj.getId() + '}/update' + '?value=' + value + '&pos=' + pos.toString();
    this.http.get(str).subscribe(n => console.log(n));
  }

  getUrl(ord: number) {
    console.log(ord);
    const Url: string = '/' + ord + '/update';
    console.log(ord);
    return Url;
  }

  getNames(ord: Order) {
    let url: string = 'http://localhost:8080/get/' + ord.getId();
    let names: string[];
    this.http.get(url).subscribe((n: string[]) => {
      names = n;
    });
    return names;
  }

  addOrder() {
    return this.sessionService.addOrder();
  }

  getRole(callback) {
    this.http.get('http://localhost:8080/get/role/' + this.sessionService.getId()).subscribe((user: DtoString) => {
      console.log('getRole');
      if (user.str === 'COOK') {
        this.flag = true;
      } else {
        this.flag = false;
      }
      callback();
    });
  }

  updateStatus(orderId: Order) {
    this.http.post('http://localhost:8080/' + orderId.toString() + '/order/status/update', this.sessionService.getId()).subscribe((subscription: Order) => {
    });
  }

  enrichOrders(response) {
    console.log('enrich orders');
    response.forEach((order) => {
      this.http.get('http://localhost:8080/get/' + order.id).subscribe((description) => {
        order.description = description;

        this.orders.push(order);
      });
    });
  }
}
