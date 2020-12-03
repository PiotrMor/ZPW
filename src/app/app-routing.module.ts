import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTripComponent } from './components/new-trip/new-trip.component';
import { TripListComponent } from './components/trip-list/trip-list.component';

const routes: Routes = [
  { path: 'trips', component: TripListComponent },
  { path: 'newTrip', component: NewTripComponent },
  { path: '', redirectTo: '/trips', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }