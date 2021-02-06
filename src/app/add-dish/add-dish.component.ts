import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Dish} from '../dto/Dish';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  AddDish(name: string, cost: number, composition: string, image: string, category: string) {
    const dish = new Dish(0, name, cost, composition, image, category);

    this.http.post('http://localhost:8080/menu/add', dish);
  }

}
