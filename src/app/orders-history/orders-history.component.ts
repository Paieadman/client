import {Component, OnInit} from '@angular/core';
import {Order} from '../dto/Order';
import {HttpClient} from '@angular/common/http';
import {HomeComponentComponent} from '../home-component/home-component.component';
import {CustomerAuthorization} from '../dto/CustomerAuthorization';
import {Customer} from '../dto/Customer';

@Component({
  selector: 'app-orders-history',
  templateUrl: './orders-history.component.html',
  styleUrls: ['./orders-history.component.css']
})
export class OrdersHistoryComponent implements OnInit {

  constructor(private http: HttpClient, private hc: HomeComponentComponent) {
  }

  client: Customer;
  orders = [];
  finalOrders = [];

  ngOnInit() {
    this.client = this.hc.customer;
    this.http.post('http://localhost:8080/orders', this.hc.customerMail).subscribe((responce: object[]) => {
      this.orders = responce;

      console.log(responce);
      for (let i of this.orders) {
        console.log('im in');
        this.http.get('http://localhost:8080/get/' + i).subscribe((description: string) => {
          const myTuple: [number, string] = [i as number, description];
          console.log(description);
          this.finalOrders.push(myTuple);
        });
      }
    });
    console.log(this.finalOrders);
  }

}
