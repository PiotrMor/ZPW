import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { NewTripComponent } from './components/new-trip/new-trip.component';
import { RegisterComponent } from './components/register/register.component';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'trips', component: TripListComponent,  canActivate: [AuthGuard] },
  { path: 'newTrip', component: NewTripComponent,  canActivate: [AuthGuard, AdminGuard] },
  { path: 'updateTrip/:id', component: NewTripComponent,  canActivate: [AuthGuard, AdminGuard] },
  { path: '', redirectTo: '/trips', pathMatch:'full', canActivate: [AuthGuard] },
  { path: 'trips/:id', component: TripDetailsComponent,  canActivate: [AuthGuard]},
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }