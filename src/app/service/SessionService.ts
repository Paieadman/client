import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Injectable()
export class SessionService implements OnInit {
  ngOnInit() {
  }

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) {
  }

  checkSession(callback) {
    const userId = this.cookieService.get('userId');
    this.http.get('http://localhost:8080/active/' + userId).subscribe((active: boolean) => {
        if (!active) {
          this.router.navigateByUrl('/authorization');
        } else {
          callback();
        }
      }
    );
  }

  exit() {
    const userId = this.cookieService.get('userId');
    this.http.post('http://localhost:8080/exit', userId).subscribe((n) => {
      this.cookieService.delete('userId');
      this.cookieService.set('userId', '0');
      this.router.navigateByUrl('/authorization');
    });
  }

  getId() {
    return this.cookieService.get('userId');
  }

  addOrder() {
    this.http.get('http://localhost:8080/orders/add/' + this.cookieService.get('userId')).subscribe((n: number) => {
      this.cookieService.set('orderId', n.toString());
      this.router.navigateByUrl('/menu');
    });
  }

  getOrderId() {
    return this.cookieService.get('orderId');
  }

  setOrderId(value: number) {
    this.cookieService.delete('orderId');
    this.cookieService.set('orderId', value.toString());
  }

}
