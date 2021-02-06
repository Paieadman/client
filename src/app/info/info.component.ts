import {Component, OnInit} from '@angular/core';
import {SessionService} from '../service/SessionService';
import {HttpClient} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {PersonalData} from '../dto/PersonalData';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [SessionService]
})
export class InfoComponent implements OnInit {

  private personalData: PersonalData;
  private flag: boolean;

  constructor(private http: HttpClient, private cookieService: CookieService, private router: Router,
              private sessionService: SessionService) {
  }

  ngOnInit() {
    let that = this;
    that.sessionService.checkSession(() => {
      that.http.post('http://localhost:8080/get/personal/data/', that.sessionService.getId()).subscribe((pd: PersonalData) => {
        that.personalData = pd;
        console.log(this.personalData);
        if (that.personalData.id == 0) {
          that.flag = false;
        } else {
          that.flag = true;
        }
      });
    });
  }

  ChangeInformation(Firstname: string, Surname: string, mobileNumer: string, Sex: string, Age: string) {
    let url = 'http://localhost:8080/change/personal/data';
    let id = (this.personalData.id === 0) ? 0 : this.personalData.id;
    console.log(Age);
    console.log(typeof Age);
    this.http.post(url, new PersonalData(id, Number.parseInt(this.sessionService.getId()), Firstname, Surname, 1, Sex, mobileNumer, ' ')).subscribe(() => {
      this.router.navigateByUrl('/info');
    });
  }
}
