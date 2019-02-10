import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LogService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://localhost:8080/authorisation');
  }
}
