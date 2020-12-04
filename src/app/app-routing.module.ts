import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewTripComponent } from './components/new-trip/new-trip.component';
import { RegisterComponent } from './components/register/register.component';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';
import { TripListComponent } from './components/trip-list/trip-list.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'trips', component: TripListComponent,  canActivate: [AuthGuard] },
  { path: 'newTrip', component: NewTripComponent,  canActivate: [AuthGuard] },
  { path: '', redirectTo: '/trips', pathMatch:'full', canActivate: [AuthGuard] },
  { path: 'trips/:id', component: TripDetailsComponent,  canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }