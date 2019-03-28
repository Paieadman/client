import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { RegistrationComponent } from './registration/registration.component';
import {FormControl, FormsModule, Validators, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { CurOrdComponent } from './cur-ord/cur-ord.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { EditComponent } from './edit/edit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatAccordion,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatSelectModule, MatChipsModule, MatDatepickerModule
} from '@angular/material';

import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material';
import {CardComponent } from './card/card.component';
import { CookieService } from 'ngx-cookie-service';
import { CurrentComponent } from './current/current.component';
import { MyComponent } from './my/my.component';
import { InfoComponent } from './info/info.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PerformedComponent } from './performed/performed.component';
import { TitledComponent } from './titled/titled.component';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    RegistrationComponent,
    CurOrdComponent,
    AddOrderComponent,
    EditComponent,
    CardComponent,
    CurrentComponent,
    MyComponent,
    InfoComponent,
    AnalyticsComponent,
    PerformedComponent,
    TitledComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatTableModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  exports: [
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatListModule,
    MatTableModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSelectModule,
    MatChipsModule,
    MatDatepickerModule
  ],
  providers: [ CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
