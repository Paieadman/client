import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../Services/RegistrationService';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationService]
})
export class RegistrationComponent implements OnInit {

  constructor(private http: RegistrationService) { }

  ngOnInit() {
  }
  tryRegistration(login: string, pass: string) {
    return this.http.getRegistration(login, pass);
  }
}
