import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatGridListModule } from '@angular/material/grid-list';
import { TripComponent } from './components/trip/trip.component';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { MatIconModule } from '@angular/material/icon';
import { RatingModule } from 'ng-starrating';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewTripComponent } from './components/new-trip/new-trip.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { CartComponent } from './components/cart/cart.component';
import { CartElementComponent } from './components/cart-element/cart-element.component';
import { SummaryComponent } from './components/summary/summary.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TripsService } from './services/trips.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TripFilterComponent } from './components/trip-filter/trip-filter.component';
import {MatListModule} from '@angular/material/list';
import { RateFilterPipe } from './pipes/rate-filter.pipe';
import { DestinationFilterPipe } from './pipes/destination-filter.pipe';
import { PriceFilterPipe } from './pipes/price-filter.pipe';
import { InMemTripService } from './services/in-mem-trip.service';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    AppComponent,
    TripListComponent,
    TripComponent,
    StarRatingComponent,
    NewTripComponent,
    CartComponent,
    CartElementComponent,
    SummaryComponent,
    TripFilterComponent,
    RateFilterPipe,
    DestinationFilterPipe,
    PriceFilterPipe,
    TripDetailsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatGridListModule,
    MatIconModule,
    RatingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TextFieldModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemTripService),
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    IvyCarouselModule,
    MatRadioModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pl-PL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
