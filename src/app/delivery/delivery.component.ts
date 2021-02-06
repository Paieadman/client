import {Component, OnInit} from '@angular/core';
import {Dish} from '../dto/Dish';
import {HomeComponentComponent} from '../home-component/home-component.component';
import {HttpClient} from '@angular/common/http';
import {DeliveryObject} from '../dto/DeliveryObject';
import {Router} from '@angular/router';
import {Card} from '../dto/Card';
import {CustomerAuthorization} from '../dto/CustomerAuthorization';
import {UserAutorization} from '../dto/UserAutorization';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  constructor(private hc: HomeComponentComponent, private http: HttpClient, private router: Router) {
  }

  private dishes: Dish[];

  ngOnInit() {
    this.dishes = this.hc.getCustomCart();
  }

  delivery(street: string, house: string, flat: string) {
    const doy = new DeliveryObject(street, house, flat, this.hc.getCustomCart());
    this.http.post('http://localhost:8080/delivery/order', doy).subscribe((id: number) => {
      console.log(this.hc.isAuthorized)
      if (this.hc.isAuthorized) {
        this.http.post('http://localhost:8080/add/history', new UserAutorization( id.toString(), this.hc.customerMail)).subscribe(() => {

        });
      }
    });
    this.router.navigateByUrl('/srt/menu');
  }

}
