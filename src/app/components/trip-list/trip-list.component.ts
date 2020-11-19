import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/model/Trip';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {
  tripList: Trip[] = [];
  totalReservations: number = 0;

  constructor() {
  }
  
  ngOnInit(): void {
    this.addRandomTrips();
  }

  isCheapest(trip: Trip): boolean {
    for (var element of this.tripList) {
      if (trip.price > element.price) {
        return false;
      }
    }
    return true;
  }

  isMostExpensive(trip: Trip): boolean {
    for (var element of this.tripList) {
      if (trip.price < element.price) {
        return false;
      }
    }
    return true;
  }

  removeTrip(trip: Trip) {
    let index = this.tripList.indexOf(trip);
    if (index !== -1) {
      this.tripList.splice(index, 1);
      this.totalReservations = trip.totalPlaces - trip.availablePlaces;
    }
  }

  handleReservationEvent(value: number) {
    this.totalReservations += value;
  }

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
    trip2.imageUrl = "https://cdn.pixabay.com/photo/2016/01/19/19/26/amsterdam-1150319_960_720.jpg";
    trip2.totalPlaces = 20;
    trip2.rate = 4;

    let trip3: Trip = new Trip("Wycieczka do Moskwy", "Rosja");
    trip3.startDate = new Date("2020-12-28");
    trip3.endDate = new Date("2021-01-5");
    trip3.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum velit, vitae posuere dolor. Morbi sit amet ante et nisl faucibus gravida non vel leo. Aenean non congue ante, eu malesuada tortor. Fusce faucibus, erat ut suscipit tempor, metus libero tristique sapien, ut malesuada tortor mi sed eros. Vivamus eget ligula neque. ";
    trip3.price = 1204;
    trip3.imageUrl = "https://cdn.pixabay.com/photo/2016/07/30/08/13/moscow-1556561_960_720.jpg";
    trip3.totalPlaces = 10;

    let trip4: Trip = new Trip("Wycieczka do Barcelony", "Hiszpania");
    trip4.startDate = new Date("2020-12-28");
    trip4.endDate = new Date("2021-01-5");
    trip4.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum velit, vitae posuere dolor. Morbi sit amet ante et nisl faucibus gravida non vel leo. Aenean non congue ante, eu malesuada tortor. Fusce faucibus, erat ut suscipit tempor, metus libero tristique sapien, ut malesuada tortor mi sed eros. Vivamus eget ligula neque. ";
    trip4.price = 2204;
    trip4.imageUrl = "https://cdn.pixabay.com/photo/2014/11/30/20/46/sagrada-familia-552084_960_720.jpg";
    trip4.totalPlaces = 20;

    let trip5: Trip = new Trip("Wycieczka do Krakowa", "Polska");
    trip5.startDate = new Date("2020-12-28");
    trip5.endDate = new Date("2021-01-5");
    trip5.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum velit, vitae posuere dolor. Morbi sit amet ante et nisl faucibus gravida non vel leo. Aenean non congue ante, eu malesuada tortor. Fusce faucibus, erat ut suscipit tempor, metus libero tristique sapien, ut malesuada tortor mi sed eros. Vivamus eget ligula neque. ";
    trip5.price = 3204;
    trip5.imageUrl = "https://cdn.pixabay.com/photo/2019/09/12/18/34/street-4472321_960_720.jpg";
    trip5.totalPlaces = 20;

    let trip6: Trip = new Trip("Wycieczka do Berlina", "Niemcy");
    trip6.startDate = new Date("2020-12-28");
    trip6.endDate = new Date("2021-01-5");
    trip6.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum velit, vitae posuere dolor. Morbi sit amet ante et nisl faucibus gravida non vel leo. Aenean non congue ante, eu malesuada tortor. Fusce faucibus, erat ut suscipit tempor, metus libero tristique sapien, ut malesuada tortor mi sed eros. Vivamus eget ligula neque. ";
    trip6.price = 504;
    trip6.imageUrl = "https://cdn.pixabay.com/photo/2013/10/28/18/51/brandenburger-tor-201939_960_720.jpg";
    trip6.totalPlaces = 20;

    let trip7: Trip = new Trip("Wycieczka do Kopenhagi", "Dania");
    trip7.startDate = new Date("2020-12-28");
    trip7.endDate = new Date("2021-01-5");
    trip7.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum velit, vitae posuere dolor. Morbi sit amet ante et nisl faucibus gravida non vel leo. Aenean non congue ante, eu malesuada tortor. Fusce faucibus, erat ut suscipit tempor, metus libero tristique sapien, ut malesuada tortor mi sed eros. Vivamus eget ligula neque. ";
    trip7.price = 647;
    trip7.imageUrl = "https://cdn.pixabay.com/photo/2020/01/06/21/24/evening-4746326_960_720.jpg";
    trip7.totalPlaces = 15;

    let trip8: Trip = new Trip("Wycieczka do Los Angeles", "Stany Zjednoczone");
    trip8.startDate = new Date("2020-12-28");
    trip8.endDate = new Date("2021-01-5");
    trip8.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum velit, vitae posuere dolor. Morbi sit amet ante et nisl faucibus gravida non vel leo. Aenean non congue ante, eu malesuada tortor. Fusce faucibus, erat ut suscipit tempor, metus libero tristique sapien, ut malesuada tortor mi sed eros. Vivamus eget ligula neque. ";
    trip8.price = 1204;
    trip8.imageUrl = "https://cdn.pixabay.com/photo/2016/08/16/17/32/hollywood-sign-1598473__340.jpg";
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
