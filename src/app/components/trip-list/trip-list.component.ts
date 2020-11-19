import { Component, OnInit } from '@angular/core';
import { Trip } from 'src/app/model/Trip';
import { TripsService } from 'src/app/services/trips.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {
  tripList: Trip[] = [];
  totalReservations: number = 0;

  constructor(private tripsService: TripsService) {
  }
  
  ngOnInit(): void {
    //this.addRandomTrips();
    this.tripList = this.tripsService.getTrips();
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
/* 
  addRandomTrips() {
    let trip1 ={
      name: "Wycieczka do Paryża",
      destination: "Francja",
      startDate: new Date("2020-12-28"),
      endDate: new Date("2021-01-5"),
      price: 300,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum velit, vitae posuere dolor. Morbi sit amet ante et nisl faucibus gravida non vel leo. Aenean non congue ante, eu malesuada tortor. Fusce faucibus, erat ut suscipit tempor, metus libero tristique sapien, ut malesuada tortor mi sed eros. Vivamus eget ligula neque. ",
      imageUrl: "https://www.travelmoney.co.nz/sites/v1.travelmoney.co.nz/files/France-small-640x480_1.jpg",
      rate: 0,
      totalPlaces: 30,
      availablePlaces: 30
    }
   let trip2 ={
      name: "Wycieczka do Amsterdamu",
      destination: "Holandia",
      startDate: new Date("2020-12-28"),
      endDate: new Date("2021-01-5"),
      price: 703,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum velit, vitae posuere dolor. Morbi sit amet ante et nisl faucibus gravida non vel leo. Aenean non congue ante, eu malesuada tortor. Fusce faucibus, erat ut suscipit tempor, metus libero tristique sapien, ut malesuada tortor mi sed eros. Vivamus eget ligula neque. ",
      imageUrl: "https://www.travelmoney.co.nz/sites/v1.travelmoney.co.nz/files/France-small-640x480_1.jpg",
      rate: 4,
      totalPlaces: 40,
      availablePlaces: 40
    }

   let trip3 ={
      name: "Wycieczka do Moskwy",
      destination: "Rosja",
      startDate: new Date("2020-12-28"),
      endDate: new Date("2021-01-5"),
      price: 1703,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum velit, vitae posuere dolor. Morbi sit amet ante et nisl faucibus gravida non vel leo. Aenean non congue ante, eu malesuada tortor. Fusce faucibus, erat ut suscipit tempor, metus libero tristique sapien, ut malesuada tortor mi sed eros. Vivamus eget ligula neque. ",
      imageUrl: "https://cdn.pixabay.com/photo/2016/07/30/08/13/moscow-1556561_960_720.jpg",
      rate: 0,
      totalPlaces: 15,
      availablePlaces: 15
    }


   let trip4 ={
      name: "Wycieczka do Barcelony",
      destination: "Hiszpania",
      startDate: new Date("2020-12-28"),
      endDate: new Date("2021-01-5"),
      price: 2204,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum velit, vitae posuere dolor. Morbi sit amet ante et nisl faucibus gravida non vel leo. Aenean non congue ante, eu malesuada tortor. Fusce faucibus, erat ut suscipit tempor, metus libero tristique sapien, ut malesuada tortor mi sed eros. Vivamus eget ligula neque. ",
      imageUrl: "https://cdn.pixabay.com/photo/2014/11/30/20/46/sagrada-familia-552084_960_720.jpg",
      rate: 0,
      totalPlaces: 20,
      availablePlaces: 20
    }

   let trip5 ={
      name: "Wycieczka do Krakowa",
      destination: "Polska",
      startDate: new Date("2020-12-28"),
      endDate: new Date("2021-01-5"),
      price: 3204,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum velit, vitae posuere dolor. Morbi sit amet ante et nisl faucibus gravida non vel leo. Aenean non congue ante, eu malesuada tortor. Fusce faucibus, erat ut suscipit tempor, metus libero tristique sapien, ut malesuada tortor mi sed eros. Vivamus eget ligula neque. ",
      imageUrl: "https://cdn.pixabay.com/photo/2019/09/12/18/34/street-4472321_960_720.jpg",
      rate: 0,
      totalPlaces: 25,
      availablePlaces: 25
    }
   let trip6 ={
      name: "Wycieczka do Berlina",
      destination: "Niemcy",
      startDate: new Date("2020-12-28"),
      endDate: new Date("2021-01-5"),
      price: 504,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum velit, vitae posuere dolor. Morbi sit amet ante et nisl faucibus gravida non vel leo. Aenean non congue ante, eu malesuada tortor. Fusce faucibus, erat ut suscipit tempor, metus libero tristique sapien, ut malesuada tortor mi sed eros. Vivamus eget ligula neque. ",
      imageUrl: "https://cdn.pixabay.com/photo/2013/10/28/18/51/brandenburger-tor-201939_960_720.jpg",
      rate: 0,
      totalPlaces: 100,
      availablePlaces: 100
    }
   let trip7 ={
      name: "Wycieczka do Kopenhagi",
      destination: "Dania",
      startDate: new Date("2020-12-28"),
      endDate: new Date("2021-01-5"),
      price: 647,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum velit, vitae posuere dolor. Morbi sit amet ante et nisl faucibus gravida non vel leo. Aenean non congue ante, eu malesuada tortor. Fusce faucibus, erat ut suscipit tempor, metus libero tristique sapien, ut malesuada tortor mi sed eros. Vivamus eget ligula neque. ",
      imageUrl: "https://cdn.pixabay.com/photo/2020/01/06/21/24/evening-4746326_960_720.jpg",
      rate: 0,
      totalPlaces: 10,
      availablePlaces: 10
    }

   let trip8 ={
      name: "Wycieczka do Los Angeles",
      destination: "Stany Zjednoczone",
      startDate: new Date("2020-12-28"),
      endDate: new Date("2021-01-5"),
      price: 1203,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut condimentum velit, vitae posuere dolor. Morbi sit amet ante et nisl faucibus gravida non vel leo. Aenean non congue ante, eu malesuada tortor. Fusce faucibus, erat ut suscipit tempor, metus libero tristique sapien, ut malesuada tortor mi sed eros. Vivamus eget ligula neque. ",
      imageUrl: "https://cdn.pixabay.com/photo/2016/08/16/17/32/hollywood-sign-1598473__340.jpg",
      rate: 0,
      totalPlaces: 20,
      availablePlaces: 20
    }
    
    this.tripList.push(trip1);
    this.tripList.push(trip2);
    this.tripList.push(trip3);
    this.tripList.push(trip4);
    this.tripList.push(trip5);
    this.tripList.push(trip6);
    this.tripList.push(trip7);
    this.tripList.push(trip8);
  } */
}
