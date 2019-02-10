import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RegistrationService {

  constructor(private http: HttpClient) {
  }

  getRegistration(login: string, pass: string) {
    return this.http.get('http://localhost:8080/registration?' + 'login=' + login + '&pass=' + pass).
    subscribe(data => console.log(data.toString()));
  }
}
