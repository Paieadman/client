import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {ArrayType} from '@angular/compiler';
import {from} from 'rxjs';
import {Ord} from '../dto/Ord';
declare var $: any;


@Component({
  selector: 'app-cur-ord',
  templateUrl: './cur-ord.component.html',
  styleUrls: ['./cur-ord.component.css']
})
export class CurOrdComponent implements OnInit {
  orders: Ord[] = [];
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8080/orders').subscribe((resp: Ord[]) => {
      this.orders = resp;
      this.orders.forEach(function call(value) {
        console.log(value);
      });
    });
  }
  remove(num: number) {
    this.http.get('http://localhost:8080/orders/{num}/remove').subscribe(n => console.log(n));
  }
  update(obj: Ord, value: string, pos: string) {
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
}
