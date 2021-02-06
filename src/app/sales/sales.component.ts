import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Sale} from '../dto/Sale';
import {DragScrollComponent} from 'ngx-drag-scroll';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  slides: string[] = [];
  private sales: Sale[] = [];

  ngOnInit() {
    this.http.get('http://localhost:8080/sales').subscribe((desription: Sale[]) => {
      this.sales = desription;

    });
  }

}
