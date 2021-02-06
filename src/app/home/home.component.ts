import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {SessionService} from '../service/SessionService';
import {CardComponent} from '../card/card.component';
import {MatDialog} from '@angular/material';
import {Dish} from '../dto/Dish';
import {DtoString} from '../dto/DtoString';

declare var $: any;

@Component({
  selector: 'app-cur-ord',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [SessionService, CardComponent]
})

export class HomeComponent implements OnInit {
  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private router: Router,
              private sessionService: SessionService,
              private cardComponent: CardComponent,
              private dialog: MatDialog) {
  }

  private ord: number;
  private order: Dish[];
  private flag: boolean;

  private flagADMIN = false;


  addDish(dish: Dish) {
    this.order.push(dish);
    let url: string = 'http://localhost:8080/' + this.ord + '/add';
    this.http.post(url, dish.id).subscribe((n) => console.log(n));
  }

  ngOnInit(): void {
    if (this.cookieService.get('userId')) {
      this.router.navigateByUrl('/restaurant/orders');
    } else {
      this.router.navigateByUrl('/authorization');
    }
    this.getRole();
  }

  getRole() {
    this.http.get('http://localhost:8080/get/role/' + this.sessionService.getId()).subscribe((user: DtoString) => {
      if (user.str === 'COOK') {
        this.flag = true;
      } else {
        this.flag = false;
        if (user.str === 'ADMIN') {

          this.flagADMIN = true;
        }
      }
    });
  }
}
