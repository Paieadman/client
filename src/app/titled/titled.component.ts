import {Component, Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {SessionService} from '../Services/SessionService';
import {CookieService} from 'ngx-cookie-service';
import {CardComponent} from '../card/card.component';
import {MatDialogConfig} from '@angular/material';
import {Order} from '../dto/Order';

@Component({
  selector: 'app-titled',
  templateUrl: './titled.component.html',
  styleUrls: ['./titled.component.css'],
  providers: [SessionService]
})
export class TitledComponent implements OnInit {

dishes: Order;

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router,
              private sessionService: SessionService) { }

  ngOnInit() {

  }

  // openDialog() {
  //   if (this.lengthOfOrder() != 0) {
  //     const dialogConfig = new MatDialogConfig();
  //     dialogConfig.disableClose = false;
  //     this.dialog.open(CardComponent, {
  //       data: {variable: this.ord},
  //       height: '400px', width: '350px'
  //     });
  //   }
  // }

  lengthOfOrder() {

  }
}
