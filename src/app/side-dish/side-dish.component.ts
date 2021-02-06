import {Component, OnInit} from '@angular/core';
import {Dish} from '../dto/Dish';
import {ActivatedRoute, Router} from '@angular/router';
import {HomeComponentComponent} from '../home-component/home-component.component';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-side-dish',
  templateUrl: './side-dish.component.html',
  styleUrls: ['./side-dish.component.css']
})
export class SideDishComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router,
              private hcc: HomeComponentComponent, private route: ActivatedRoute) {
  }

  menu: Dish[] = [];

  ngOnInit() {
    this.http.get('http://localhost:8080/menu/SideDish').subscribe((resp: Dish[]) => {
      this.menu = resp;
    });
  }

}
