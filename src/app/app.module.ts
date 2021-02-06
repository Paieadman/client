import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DragScrollModule} from 'ngx-drag-scroll';
import {MatCarouselModule} from '@ngmodule/material-carousel';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthorizationComponent} from './authorization/authorization.component';
import {RegistrationComponent} from './registration/registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CurOrdComponent} from './cur-ord/cur-ord.component';
import {AddOrderComponent} from './add-order/add-order.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatSelectModule, MatChipsModule, MatDatepickerModule
} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';


import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {CardComponent} from './card/card.component';
import {CookieService} from 'ngx-cookie-service';
import {MyComponent} from './my/my.component';
import {InfoComponent} from './info/info.component';
import {AnalyticsComponent} from './analytics/analytics.component';
import {PerformedComponent} from './performed/performed.component';
import {HomeComponent} from './home/home.component';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import {CookersComponent} from './cookers/cookers.component';
import {AddDishComponent} from './add-dish/add-dish.component';
import {HomeComponentComponent} from './home-component/home-component.component';
import {CustomComponent} from './custom/custom.component';
import {DeliveryComponent} from './delivery/delivery.component';
import {CustomerRegistrationComponent} from './customer-registration/customer-registration.component';
import {CustomerAuthorizationComponent} from './customer-authorization/customer-authorization.component';
import {OrdersHistoryComponent} from './orders-history/orders-history.component';
import {CommentsComponent} from './comments/comments.component';
import {SalesComponent} from './sales/sales.component';
import {CarouselComponent} from './carousel/carousel.component';
import {MatTabNavBase} from '@angular/material/typings/esm5/tabs/tab-nav-bar';
import {SortingComponent} from './sorting/sorting.component';
import {HotComponent} from './hot/hot.component';
import {SaladComponent} from './salad/salad.component';
import {DrinksComponent} from './drinks/drinks.component';
import {DesertsComponent} from './deserts/deserts.component';
import {SideDishComponent} from './side-dish/side-dish.component';
import {UserAuthorized} from './dto/UserAuthorized';
import { DeliverToComponent } from './deliver-to/deliver-to.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    RegistrationComponent,
    CurOrdComponent,
    AddOrderComponent,
    CardComponent,
    MyComponent,
    InfoComponent,
    AnalyticsComponent,
    PerformedComponent,
    HomeComponent,
    CookersComponent,
    AddDishComponent,
    HomeComponentComponent,
    CustomComponent,
    DeliveryComponent,
    CustomerRegistrationComponent,
    CustomerAuthorizationComponent,
    OrdersHistoryComponent,
    CommentsComponent,
    SalesComponent,
    CarouselComponent,
    SortingComponent,
    HotComponent,
    SaladComponent,
    DrinksComponent,
    DesertsComponent,
    SideDishComponent,
    DeliverToComponent
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
    MatMomentDateModule,
    DragScrollModule,
    MatStepperModule,
    ScrollingModule,
    MatTabsModule,
    MatCarouselModule,
    MatButtonToggleModule
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
    MatDatepickerModule,
    DragScrollModule,
    MatStepperModule,
    MatTabsModule,
    MatCarouselModule,
    MatButtonToggleModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
