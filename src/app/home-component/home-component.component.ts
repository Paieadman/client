import {Component, OnInit} from '@angular/core';
import {Dish} from '../dto/Dish';
import {Customer} from '../dto/Customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(private router: Router) {
    this.customer = new Customer(0, 'uncnown', 'uncnown', 'uncnown', 'uncnown');
  }

  customer: Customer;
  customerMail: string;
  customCart: Dish[] = [];
  isAuthorized = false;

  ngOnInit() {
  }

  public addDishToCustomCart(dish: Dish) {
    this.customCart.push(dish);
  }

  public getCustomCart(): Dish[] {
    return this.customCart;
  }

  public setCustomer(customer: Customer) {
    this.customer = customer;
    this.isAuthorized = true;
  }

  public getCustomerId(): number {
    return this.customer.getId();
  }

  public exit() {
    this.isAuthorized = false;
  }
}
