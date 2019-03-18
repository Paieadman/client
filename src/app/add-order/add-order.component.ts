import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Ord} from '../dto/Ord';
import {Dish} from '../dto/Dish';


const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  menu: Dish[] = [];
  order: Dish[] = [];
  ord: number;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/menu').subscribe((resp: Dish[]) => {
      this.menu = resp;
      this.menu.forEach(function call(value) {
        console.log(value);
      });
    });
    this.http.get('http://localhost:8080/orders/add').subscribe((n: number) => {
      this.ord = n;
      console.log(n);
      console.log('from init');
      console.log(this.ord);
    });
    console.log(this.ord);
    console.log('from init');
  }
  addDish(dish: Dish) {
    this.order.push(dish);
    console.log(dish.id);
    let url: string = 'http://localhost:8080/' + this.ord.toString() + '/add';
    this.http.post(url, dish.id).subscribe((n) => console.log(n));
  }

  endOrder() {
    let str: string = this.order[0].id.toString();
    for ( let i = 1; i < this.order.length; i++) {
      str += ',' + this.order[i].id.toString();
    }
    console.log(str.toString());
    // console.log(new Ord(0, 1, '2000-11-11 3:12:11', 1, str.toString()));
    // this.http.post('http://localhost:8080/orders/add',
    //   new Ord(0, 1, '2000-11-11 3:12:11', 1, str.toString()), cudOptions).subscribe(
    //   (n => console.log(n))
    // );
  }
}
