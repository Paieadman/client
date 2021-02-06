import {Component, OnInit} from '@angular/core';
import {SessionService} from '../service/SessionService';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {Chart} from 'node_modules/chart.js';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css'],
  providers: [SessionService]
})
export class AnalyticsComponent implements OnInit {

  numbers: number[] = [];
  private barChart: any = [];

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router,
              private sessionService: SessionService) {
  }

  ngOnInit() {
    let that = this;
    that.sessionService.checkSession(() => {
      that.http.post('http://localhost:8080/get/Number/orders', this.sessionService.getId()).subscribe((n: number[]) => {
        that.numbers = n;
        console.log(this.numbers);
        that.barChart = new Chart('barChart', {
          type: 'bar',
          data: {
            labels: ['Текущие', 'Выполненные', 'Все заказы'],
            datasets: [{
              label: 'Заказы',
              data: that.numbers,
              backgroundColor: [
                'rgba(255,99,132,0.2)',
                'rgba(54,162,235,0.2)',
                'rgba(255,206,86,0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54,162,235,1)',
                'rgba(255,206,86,1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            title: {
              text: 'Статистика',
              display: true
            },
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      });
    });
  }

}
