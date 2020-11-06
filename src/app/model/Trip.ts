import { URL } from 'url';

export class Trip {
    name: string;
    destination: string;
    startDate: Date;
    endDate: Date;
    price: number;
    description: string;
    imageUrl: string;
    private _totalPlaces: number;
    private _availablePlaces: number;

    
    constructor(name: string, destination: string) {
        this.name = name;
        this.destination = destination
    }

    public get totalPlaces(): number {
        return this._totalPlaces;
    }
    public set totalPlaces(value: number) {
        this._totalPlaces = value;
        this.availablePlaces = value;
    }

    public get availablePlaces(): number {
        return this._availablePlaces;
    }
    public set availablePlaces(value: number) {
        this._availablePlaces = value;
    }
}