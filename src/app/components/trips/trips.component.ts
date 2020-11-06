import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/model/Trip';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.scss']
})
export class TripsComponent implements OnInit {
  tripList: Trip[] = [];
  totalReservations: number = 0;

  constructor() {
  }
  
  ngOnInit(): void {
    this.addRandomTrips();
  }

  addReservation(trip: Trip) {
    trip.availablePlaces -= 1;
    this.totalReservations += 1;
  }

  removeReservation(trip: Trip) {
    if (trip.availablePlaces < trip.totalPlaces) {
      trip.availablePlaces += 1;
      this.totalReservations -= 1;
    }
  }

  isAlmostSoldOut(trip: Trip): boolean {
    return trip.availablePlaces / trip.totalPlaces <= 0.35;
  }

  isSoldOut(trip: Trip): boolean {
    return trip.availablePlaces == 0;
  }

/*   isCheapest(trip: Trip): boolean {
    for (var element of this.tripList) {
      if (trip.price > element.price) {
        return false;
      }
    }
    return true;
  }

  isMostExpansive(trip: Trip): boolean {
    for (var element of this.tripList) {
      if (trip.price < element.price) {
        return false;
      }
    }
    return true;
  } */

  addRandomTrips() {
    let trip1: Trip = new Trip("Wycieczka do Paryża", "Francja");
    trip1.startDate = new Date("2020-12-28");
    trip1.endDate = new Date("2021-01-5");
    trip1.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum velit, vitae posuere dolor. Morbi sit amet ante et nisl faucibus gravida non vel leo. Aenean non congue ante, eu malesuada tortor. Fusce faucibus, erat ut suscipit tempor, metus libero tristique sapien, ut malesuada tortor mi sed eros. Vivamus eget ligula neque. ";
    trip1.price = 300;
    trip1.imageUrl = "https://www.travelmoney.co.nz/sites/v1.travelmoney.co.nz/files/France-small-640x480_1.jpg";
    trip1.totalPlaces = 30;

    let trip2: Trip = new Trip("Wycieczka do Amsterdamu", "Holandia");
    trip2.startDate = new Date("2020-12-28");
    trip2.endDate = new Date("2021-01-5");
    trip2.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum velit, vitae posuere dolor. Morbi sit amet ante et nisl faucibus gravida non vel leo. Aenean non congue ante, eu malesuada tortor. Fusce faucibus, erat ut suscipit tempor, metus libero tristique sapien, ut malesuada tortor mi sed eros. Vivamus eget ligula neque. ";
    trip2.price = 704;
    trip2.imageUrl = "https://lh3.googleusercontent.com/proxy/SKZ9NaLSaHvpZUDBXCBpISDgHyaAyEvtMNTvwx3vrkqaxkC-xXdL3yS4lMwGqnwJNlggGRm6mFdzTT27YBZd32P_iQahwcOtq9PHU4p0ckN2B_8dG6KVI_qaVxwc";
    trip2.totalPlaces = 20;

    let trip3: Trip = new Trip("Wycieczka do Paryża", "Francja");
    trip3.startDate = new Date("2020-12-28");
    trip3.endDate = new Date("2021-01-5");
    trip3.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum velit, vitae posuere dolor. Morbi sit amet ante et nisl faucibus gravida non vel leo. Aenean non congue ante, eu malesuada tortor. Fusce faucibus, erat ut suscipit tempor, metus libero tristique sapien, ut malesuada tortor mi sed eros. Vivamus eget ligula neque. ";
    trip3.price = 1204;
    trip3.imageUrl = "https://www.travelmoney.co.nz/sites/v1.travelmoney.co.nz/files/France-small-640x480_1.jpg";
    trip3.totalPlaces = 10;

    let trip4: Trip = new Trip("Wycieczka do Paryża", "Francja");
    trip4.startDate = new Date("2020-12-28");
    trip4.endDate = new Date("2021-01-5");
    trip4.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum velit, vitae posuere dolor. Morbi sit amet ante et nisl faucibus gravida non vel leo. Aenean non congue ante, eu malesuada tortor. Fusce faucibus, erat ut suscipit tempor, metus libero tristique sapien, ut malesuada tortor mi sed eros. Vivamus eget ligula neque. ";
    trip4.price = 2204;
    trip4.imageUrl = "https://www.travelmoney.co.nz/sites/v1.travelmoney.co.nz/files/France-small-640x480_1.jpg";
    trip4.totalPlaces = 20;

    let trip5: Trip = new Trip("Wycieczka do Paryża", "Francja");
    trip5.startDate = new Date("2020-12-28");
    trip5.endDate = new Date("2021-01-5");
    trip5.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum velit, vitae posuere dolor. Morbi sit amet ante et nisl faucibus gravida non vel leo. Aenean non congue ante, eu malesuada tortor. Fusce faucibus, erat ut suscipit tempor, metus libero tristique sapien, ut malesuada tortor mi sed eros. Vivamus eget ligula neque. ";
    trip5.price = 3204;
    trip5.imageUrl = "https://www.travelmoney.co.nz/sites/v1.travelmoney.co.nz/files/France-small-640x480_1.jpg";
    trip5.totalPlaces = 20;

    let trip6: Trip = new Trip("Wycieczka do Paryża", "Francja");
    trip6.startDate = new Date("2020-12-28");
    trip6.endDate = new Date("2021-01-5");
    trip6.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum velit, vitae posuere dolor. Morbi sit amet ante et nisl faucibus gravida non vel leo. Aenean non congue ante, eu malesuada tortor. Fusce faucibus, erat ut suscipit tempor, metus libero tristique sapien, ut malesuada tortor mi sed eros. Vivamus eget ligula neque. ";
    trip6.price = 504;
    trip6.imageUrl = "https://www.travelmoney.co.nz/sites/v1.travelmoney.co.nz/files/France-small-640x480_1.jpg";
    trip6.totalPlaces = 20;

    let trip7: Trip = new Trip("Wycieczka do Paryża", "Francja");
    trip7.startDate = new Date("2020-12-28");
    trip7.endDate = new Date("2021-01-5");
    trip7.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum velit, vitae posuere dolor. Morbi sit amet ante et nisl faucibus gravida non vel leo. Aenean non congue ante, eu malesuada tortor. Fusce faucibus, erat ut suscipit tempor, metus libero tristique sapien, ut malesuada tortor mi sed eros. Vivamus eget ligula neque. ";
    trip7.price = 647;
    trip7.imageUrl = "https://www.travelmoney.co.nz/sites/v1.travelmoney.co.nz/files/France-small-640x480_1.jpg";
    trip7.totalPlaces = 15;

    let trip8: Trip = new Trip("Wycieczka do Paryża", "Francja");
    trip8.startDate = new Date("2020-12-28");
    trip8.endDate = new Date("2021-01-5");
    trip8.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum velit, vitae posuere dolor. Morbi sit amet ante et nisl faucibus gravida non vel leo. Aenean non congue ante, eu malesuada tortor. Fusce faucibus, erat ut suscipit tempor, metus libero tristique sapien, ut malesuada tortor mi sed eros. Vivamus eget ligula neque. ";
    trip8.price = 1204;
    trip8.imageUrl = "https://www.travelmoney.co.nz/sites/v1.travelmoney.co.nz/files/France-small-640x480_1.jpg";
    trip8.totalPlaces = 20;
    
    this.tripList.push(trip1);
    this.tripList.push(trip2);
    this.tripList.push(trip3);
    this.tripList.push(trip4);
    this.tripList.push(trip5);
    this.tripList.push(trip6);
    this.tripList.push(trip7);
    this.tripList.push(trip8);
  }
}
