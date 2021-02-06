import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CustomerAuthorization} from '../dto/CustomerAuthorization';
import {Customer} from '../dto/Customer';
import {HomeComponentComponent} from '../home-component/home-component.component';
import {Router} from '@angular/router';
import {UserAutorization} from '../dto/UserAutorization';

@Component({
  selector: 'app-customer-authorization',
  templateUrl: './customer-authorization.component.html',
  styleUrls: ['./customer-authorization.component.css']
})
export class CustomerAuthorizationComponent implements OnInit {

  constructor(private http: HttpClient, private hc: HomeComponentComponent, private router: Router) {
  }

  ngOnInit() {
  }

  tryAuthorize(mail: string, password: string) {
    this.http.post('http://localhost:8080/customer/authorization', new UserAutorization(mail, password)).subscribe((customer) => {
      let cus = customer as Customer;
      this.hc.customerMail = cus.mail;
      console.log(cus);
      console.log(typeof cus);
      this.hc.setCustomer(cus);
      this.router.navigateByUrl('/srt/menu/all');
    });
  }

}
