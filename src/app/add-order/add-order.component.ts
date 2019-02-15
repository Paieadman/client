import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Order} from '../dto/order';
import {Dish} from '../dto/dish';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  menu: Dish[] = [];
  order: Dish[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/menu').subscribe((resp: Dish[]) => {
      this.menu = resp;
      this.menu.forEach(function call(value) {
        console.log(value);
      });
    });
  }
  addDish(dish: Dish) {
    this.order.push(dish);
    console.log(dish.id);
  }

  endOrder() {
    let str: string = this.order[0].id.toString();
    for ( let i = 1; i < this.order.length; i++) {
      str += ',' + this.order[i].id.toString();
    }
    console.log(str.toString());
    console.log(new Order(0, 1, '2000-11-11 3:12:11', 1, str.toString()));
    this.http.post('http://localhost:8080/orders/add',
      new Order(0, 1, '2000-11-11 3:12:11', 1, str.toString()), cudOptions).subscribe(
      (n => console.log(n))
    );
  }
}
