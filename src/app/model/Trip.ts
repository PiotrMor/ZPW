
export interface Trip {
    id: number;
    name: string;
    destination: string;
    startDate: string;
    endDate: string;
    price: number;
    description: string;
    imageUrl: string;
    rate: number;
    totalPlaces: number;
    availablePlaces: number;
}