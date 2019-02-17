import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {ArrayType} from '@angular/compiler';
import {from} from 'rxjs';
import {Order} from '../dto/order';

@Component({
  selector: 'app-cur-ord',
  templateUrl: './cur-ord.component.html',
  styleUrls: ['./cur-ord.component.css']
})
export class CurOrdComponent implements OnInit {
  orders: Order[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8080/orders').subscribe((resp: Order[]) => {
      this.orders = resp;
      this.orders.forEach(function call(value) {
        console.log(value);
      } ) } );
  }
  remove(num: number) {
    this.http.get('http://localhost:8080/orders/{num}/remove').subscribe(n => console.log(n));
  }
  update(obj: Order, value: string, pos: string) {

    this.http.get('http://localhost:8080/orders/{}/update').subscribe(n => console.log(n));
  }

}
