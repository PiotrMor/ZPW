import { Injectable } from '@angular/core';
import { Cart } from '../model/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCart(cardID: number): Cart  {
    return null;
  }
}
