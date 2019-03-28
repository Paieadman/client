import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserAutorization} from '../dto/UserAutorization';

@Injectable()
export class AuthorizationService {

  constructor(private http: HttpClient, private router: Router) {
  }

  getAuthorization(login: string, pass: string) {
    return this.http.post('http://localhost:8080/authorization', new UserAutorization(login, pass));
  }
}
