import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTripComponent } from './components/new-trip/new-trip.component';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';
import { TripListComponent } from './components/trip-list/trip-list.component';

const routes: Routes = [
  { path: 'trips', component: TripListComponent },
  { path: 'newTrip', component: NewTripComponent },
  { path: '', redirectTo: '/trips', pathMatch:'full' },
  { path: 'trips/:id', component: TripDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }