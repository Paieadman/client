import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ArrayType} from '@angular/compiler';
import {from} from 'rxjs';
import {Order} from '../dto/Order';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {SessionService} from '../Services/SessionService';
import {AuthorizationService} from '../Services/AuthorizationService';

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

  mouseEnter() {
    console.log('hello');
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
    this.http.get('http://localhost:8080/get/role/' + this.sessionService.getId()).subscribe((user: User) => {
      console.log(user);
      if (user.getRole() == 'COOK') {
        this.flag = true;
      } else {
        this.flag = false;
      }
      callback();
    });
  }

  updateStatus(order: Order) {
    this.http.post('http://localhost:8080/order/status/update', order.getId()).subscribe((subscription: Order) => {
      order.setStatus(subscription.getStatus());
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
