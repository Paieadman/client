import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthorizationService {

  constructor(private http: HttpClient) {
  }

  getAuthorization(login: string, pass: string) {
    return this.http.get('http://localhost:8080/authorisation?' + 'login=' + login + '&pass=' + pass).
    subscribe(data => console.log(data.toString()));
  }
}
