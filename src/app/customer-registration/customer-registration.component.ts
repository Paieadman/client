import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserAutorization} from '../dto/UserAutorization';
import {Customer} from '../dto/Customer';
import {HomeComponentComponent} from '../home-component/home-component.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(private http: HttpClient, private homeComponentComponent: HomeComponentComponent,
              private _formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  tryRegistration(name: string, mobileNumber: string, mail: string, password: string) {
    this.http.post('http://localhost:8080/customer/registration', new Customer(0, name, mobileNumber, mail, password)).subscribe((id: number) => {
      this.homeComponentComponent.setCustomer(new Customer(id, name, mobileNumber, mail, password));

      this.router.navigateByUrl('/srt/menu/all');
    });
  }

}
