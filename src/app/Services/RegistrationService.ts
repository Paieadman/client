import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../dto/user';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) {
  }

  getRegistration(login: string, pass: string, name: string, role: string) {
    return this.http.post('http://localhost:8080/registration', new User(login, pass, name, role, 1));
  }
}
