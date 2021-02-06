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
import {AddDishComponent} from './add-dish/add-dish.component';
import {HomeComponentComponent} from './home-component/home-component.component';
import {CustomComponent} from './custom/custom.component';
import {DeliveryComponent} from './delivery/delivery.component';
import {CustomerRegistrationComponent} from './customer-registration/customer-registration.component';
import {CustomerAuthorizationComponent} from './customer-authorization/customer-authorization.component';
import {SalesComponent} from './sales/sales.component';
import {CarouselComponent} from './carousel/carousel.component';
import {OrdersHistoryComponent} from './orders-history/orders-history.component';
import {CommentsComponent} from './comments/comments.component';
import {SortingComponent} from './sorting/sorting.component';
import {HotComponent} from './hot/hot.component';
import {SaladComponent} from './salad/salad.component';
import {SideDishComponent} from './side-dish/side-dish.component';
import {DesertsComponent} from './deserts/deserts.component';
import {DrinksComponent} from './drinks/drinks.component';
import {DeliverToComponent} from './deliver-to/deliver-to.component';

const routes: Routes = [
  {path: 'authorization', component: AuthorizationComponent},
  {path: 'registration', component: RegistrationComponent},
  {
    path: 'restaurant', component: HomeComponent, children: [
      {path: 'orders', component: CurOrdComponent},
      {path: 'menu', component: AddOrderComponent},
      {path: 'cart', component: CardComponent},
      {path: 'analytics', component: AnalyticsComponent},
      {path: 'performed', component: PerformedComponent},
      {path: 'info', component: InfoComponent},
      {path: 'orders/all', component: MyComponent},
      {path: 'cookers', component: CookersComponent},
      {path: 'dish/new', component: AddDishComponent},
      {path: 'deliver', component: DeliverToComponent}
    ]
  },
  {
    path: '', component: HomeComponentComponent, children: [
      {
        path: 'srt', component: SortingComponent, children: [
          {path: 'menu/all', component: CustomComponent},
          {path: 'menu/Hot', component: HotComponent},
          {path: 'menu/Salad', component: SaladComponent},
          {path: 'menu/SideDish', component: SideDishComponent},
          {path: 'menu/Deserts', component: DesertsComponent},
          {path: 'menu/Drinks', component: DrinksComponent}
        ]
      },
      {path: 'delivery', component: DeliveryComponent},
      {path: 'customer/authorization', component: CustomerAuthorizationComponent},
      {path: 'customer/registration', component: CustomerRegistrationComponent},
      {path: 'sales', component: SalesComponent},
      {path: 'history', component: OrdersHistoryComponent},
      {
        path: 'carousel', component: CarouselComponent, children: [
          {path: 'comments', component: CommentsComponent}
        ]
      }
    ]
  },

];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule,
    HttpClientModule, MatBadgeModule, MatButtonModule, MatIconModule],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
