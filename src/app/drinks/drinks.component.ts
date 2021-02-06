import {Component, OnInit} from '@angular/core';
import {Dish} from '../dto/Dish';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeComponentComponent} from '../home-component/home-component.component';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router,
              private hcc: HomeComponentComponent, private route: ActivatedRoute) {
  }

  menu: Dish[] = [];

  ngOnInit() {
    this.http.get('http://localhost:8080/menu/Drinks').subscribe((resp: Dish[]) => {
      this.menu = resp;
    });
  }

}
