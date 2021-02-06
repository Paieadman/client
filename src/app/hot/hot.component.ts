import {Component, OnInit} from '@angular/core';
import {Dish} from '../dto/Dish';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-hot',
  templateUrl: './hot.component.html',
  styleUrls: ['./hot.component.css']
})
export class HotComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  menu: Dish[] = [];

  ngOnInit() {
    this.http.get('http://localhost:8080/menu/Hot').subscribe((resp: Dish[]) => {
      this.menu = resp;
    });
  }

}
