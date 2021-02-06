import {Component, Inject, Injectable, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router, Routes} from '@angular/router';
import {Dish} from '../dto/Dish';
import {MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import {SessionService} from '../service/SessionService';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [SessionService]
})
export class CardComponent implements OnInit {

  public order: number;

  private dishes: Dish[];

  constructor(private http: HttpClient, private route: ActivatedRoute, private sessionService: SessionService,
              private router: Router) {
  }

  ngOnInit() {
    this.order = Number.parseInt(this.sessionService.getOrderId());
    let url: string = 'http://localhost:8080/' + this.order.toString() + '/get/all';
    this.http.get(url).subscribe((n: Dish[]) => {
      this.dishes = n;
    });
  }

  confirmOrder() {
    this.http.get('http://localhost:8080/' + this.order.toString() + '/confirm').subscribe(() => {
      this.sessionService.setOrderId(0);
      this.router.navigateByUrl('/orders');
    });
  }

  delete(dish: Dish) {
    this.http.post('http://localhost:8080/' + this.order + '/delete', dish).subscribe(() => {
      this.dishes.splice(this.dishes.indexOf(dish), 1);
    });
  }

  lengthOfCurrentOrder() {
    return this.dishes.length;
  }


}
