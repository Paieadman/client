import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AuthorizationComponent} from './authorization/authorization.component';
import {RegistrationComponent} from './registration/registration.component';
import {CurOrdComponent} from './cur-ord/cur-ord.component';
import {AddOrderComponent} from './add-order/add-order.component';
import {MatBadgeModule, MatButtonModule, MatIconModule} from '@angular/material';
import {CardComponent} from './card/card.component';
import {AnalyticsComponent} from './analytics/analytics.component';
import {PerformedComponent} from './performed/performed.component';
import {InfoComponent} from './info/info.component';
import {MyComponent} from './my/my.component';
import {HomeComponent} from './home/home.component';
import {CookersComponent} from './cookers/cookers.component';

const routes: Routes = [
  {path: 'authorization', component: AuthorizationComponent},
  {path: 'registration', component: RegistrationComponent},
  {
    path: '', component: HomeComponent, children: [
      {path: 'orders', component: CurOrdComponent},
      {path: 'menu', component: AddOrderComponent},
      {path: 'cart', component: CardComponent},
      {path: 'analytics', component: AnalyticsComponent},
      {path: 'performed', component: PerformedComponent},
      {path: 'info', component: InfoComponent},
      {path: 'orders/all', component: MyComponent},
      {path: 'cookers', component: CookersComponent}
    ]
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule,
    HttpClientModule, MatBadgeModule, MatButtonModule, MatIconModule],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
