import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../dto/user';
import {Router} from '@angular/router';

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient, private router: Router) {
  }

  getRegistration(login: string, pass: string, name: string, role: string) {
    this.http.post('http://localhost:8080/registration', new User(login, pass, name, role))
      .subscribe(data => {
        this.router.navigateByUrl('orders');
      });
  }
}
