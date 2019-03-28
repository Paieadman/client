import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AuthorizationComponent} from './authorization/authorization.component';
import {RegistrationComponent} from './registration/registration.component';
import {CurOrdComponent} from './cur-ord/cur-ord.component';
import {AddOrderComponent} from './add-order/add-order.component';
import {MatBadgeModule, MatButtonModule, MatIconModule} from '@angular/material';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {CardComponent} from './card/card.component';
import {AnalyticsComponent} from './analytics/analytics.component';
import {PerformedComponent} from './performed/performed.component';
import {InfoComponent} from './info/info.component';
import {MyComponent} from './my/my.component';
import {TitledComponent} from './titled/titled.component';

// const otherRoutes: Routes = [
//   { path: ':id/update', component: EditComponent, pathMatch: 'full'},
//   { path: 'ord/orders', component: CurOrdComponent},
//   { path: 'menu', component: AddOrderComponent},
//   { path: 'order', component: CardComponent},
//   { path: 'analytics', component: AnalyticsComponent},
//   { path: 'performed', component: PerformedComponent},
//   { path: 'info', component: InfoComponent},
//   { path: 'orders/all', component: MyComponent},
//   { path: 'a', component: EditComponent}
// ];

const routes: Routes = [
  { path: 'authorization', component: AuthorizationComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: '', component: TitledComponent, children: [
      { path: 'orders', component: CurOrdComponent},
      { path: 'menu', component: AddOrderComponent},
      { path: 'order', component: CardComponent},
      { path: 'analytics', component: AnalyticsComponent},
      { path: 'performed', component: PerformedComponent},
      { path: 'info', component: InfoComponent},
      { path: 'orders/all', component: MyComponent}
    ]}
  ];

@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot(routes), FormsModule,
    HttpClientModule, MatBadgeModule, MatButtonModule, MatIconModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
