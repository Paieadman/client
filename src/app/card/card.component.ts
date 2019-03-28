import {Component, Inject, Injectable, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Routes} from '@angular/router';
import {Dish} from '../dto/Dish';
import {OrderNumber} from '../dto/OrderNumber';
import {MAT_DIALOG_DATA} from '@angular/material';
import {SessionService} from '../Services/SessionService';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  providers: [SessionService]
})
export class CardComponent implements OnInit {

  public order: number;
  private dishes: Dish[];

  constructor(private http: HttpClient, private route: ActivatedRoute, @Inject(MAT_DIALOG_DATA) data, private sessionService: SessionService) {
    this.order = Number.parseInt(data.variable);
  }

  ngOnInit() {
    // this.variable = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    let url: string = 'http://localhost:8080/' + this.order.toString() + '/get/all';
    this.http.get(url).subscribe((n: Dish[]) => {
      this.dishes = n;
    });
  }

  confirm() {
    this.http.get('http://localhost:8080/confirm/' + this.order.toString());
  }

  delete(dish: Dish) {
    this.http.post('http://localhost:8080/' + this.order + '/delete', dish).subscribe(() => {
      this.dishes.splice(this.dishes.indexOf(dish), 1);
    });
  }
}
