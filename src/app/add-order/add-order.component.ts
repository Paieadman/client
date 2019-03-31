import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Dish} from '../dto/Dish';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {CardComponent} from '../card/card.component';
import {SessionService} from '../service/SessionService';

const cudOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css'],
  providers: [SessionService]
})
export class AddOrderComponent implements OnInit {
  menu: Dish[] = [];
  order: Dish[] = [];
  ord: number;

  constructor(private http: HttpClient, private route: ActivatedRoute, public dialog: MatDialog,
              private sessionService: SessionService, private router: Router) {
  }

  ngOnInit() {
    let that = this;
    that.sessionService.checkSession(() => {
      that.http.get('http://localhost:8080/menu').subscribe((resp: Dish[]) => {
        that.menu = resp;
        that.getOrderByUser(() => {
          if (that.ord != 0) {
            that.http.get('http://localhost:8080/get/cards/' + that.ord).subscribe((dishes: Dish[]) => {
              dishes.forEach((dish: Dish) => {
                that.order.push(dish);
              });
            });
          } else {
            that.http.get('http://localhost:8080/orders/add/' + that.sessionService.getId()).subscribe((order: number) => {
              that.ord = order;
              that.sessionService.setOrderId(order);
            });
          }
        });
      });
    });
  }

  getOrderByUser(callback) {
    this.http.get('http://localhost:8080/get/order/' + this.sessionService.getId()).subscribe((orderId: number) => {
      this.ord = orderId;
      this.sessionService.setOrderId(this.ord);
      callback();
    });
  }

  addDish(dish: Dish) {
    this.order.push(dish);
    let url: string = 'http://localhost:8080/' + this.ord + '/add';
    this.http.post(url, dish.id).subscribe((n) => console.log(n));
  }

  // openDialog() {
  //   if (this.order.length != 0) {
  //     const dialogConfig = new MatDialogConfig();
  //     dialogConfig.disableClose = false;
  //     this.dialog.open(CardComponent, {
  //       data: {variable: this.ord},
  //       height: '400px', width: '350px'
  //     });
  //   }
  // }
}

