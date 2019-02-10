import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AuthorizationComponent} from './authorization/authorization.component';
import {RegistrationComponent} from './registration/registration.component';
import {CurOrdComponent} from './cur-ord/cur-ord.component';

const routes: Routes = [
  { path: '', component: AuthorizationComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'orders', component: CurOrdComponent}
  ];

@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot(routes), FormsModule, HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
