import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {SessionService} from '../service/SessionService';
import {Dish} from '../dto/Dish';
import {HomeComponentComponent} from '../home-component/home-component.component';
import {SortingComponent} from '../sorting/sorting.component';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit {

  food: string[] = ['all', 'Hot', 'Salad', 'Drinks', 'Garnir', 'Deserts'];
  menu: Dish[] = [];
  fullMenu: Dish[] = [];
  category: string;

  constructor(private http: HttpClient, private router: Router,
              private hcc: HomeComponentComponent, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8080/menu/all').subscribe((resp: Dish[]) => {

      this.menu = resp;
    });
  }

  addDish(dish: Dish) {
    this.hcc.addDishToCustomCart(dish);
  }

  public reboot() {
    console.log('reboot');
    this.router.navigateByUrl('/DummyComponent', {skipLocationChange: true}).then(() =>
      this.router.navigate(['/menu/' + this.category]));
  }


}
