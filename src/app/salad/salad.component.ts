import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeComponentComponent} from '../home-component/home-component.component';
import {HttpClient} from '@angular/common/http';
import {Dish} from '../dto/Dish';

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrls: ['./salad.component.css']
})
export class SaladComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router,
              private hcc: HomeComponentComponent, private route: ActivatedRoute) {
  }

  menu: Dish[] = [];

  ngOnInit() {
    this.http.get('http://localhost:8080/menu/Salad').subscribe((resp: Dish[]) => {
      this.menu = resp;
    });
  }

}
