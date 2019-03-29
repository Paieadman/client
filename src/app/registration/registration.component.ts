import {Component, OnInit} from '@angular/core';
import {RegistrationService} from '../service/RegistrationService';
import {FormControl, Validators} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [RegistrationService]
})
export class RegistrationComponent implements OnInit {

  public inputValidator1 = new FormControl('', [Validators.required]);
  public inputValidator2 = new FormControl('', [Validators.required]);
  public inputValidator3 = new FormControl('', [Validators.required]);
  public inputValidator4 = new FormControl('', [Validators.required]);
  private error = false;

  constructor(private http: RegistrationService, private cookieService: CookieService, private router: Router) {}

  ngOnInit() {}

  getErrorMessage1() {
    return this.inputValidator1.hasError('required') ? 'You must enter a value' : '';
  }

  getErrorMessage2() {
    return this.inputValidator2.hasError('required') ? 'You must enter a value' : '';
  }

  getErrorMessage3() {
    return this.inputValidator3.hasError('required') ? 'You must enter a value' : '';
  }

  getErrorMessage4() {
    return this.inputValidator4.hasError('required') ? 'You must enter a value' : '';
  }


  tryRegistration(login: string, password: string, name: string, role: string) {
    if (login != null && password != null && name != null && role != null) {

      this.http.getRegistration(name, role, login, password).subscribe((userId: number) => {
        this.cookieService.set('userId', userId.toString());
        this.router.navigateByUrl('orders');
      });
    } else {
      this.error = true;
    }
  }
}
