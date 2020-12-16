import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Cart } from '../model/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private path = 'carts/';

  constructor(private db: AngularFirestore) {
  }

  getCart(id: string): Observable<Cart> {
    return this.db.collection(this.path).doc<Cart>(id).get().pipe(map(d => d.data()));
  }

  createCart(id: string): Promise<any> {
    return this.db.collection(this.path).doc(id).set({
      "id": id,
      "elements": []
    });
  }

  updateCart(cart: Cart): Promise<any> {
    return this.db.collection(this.path).doc<Cart>(cart.id).update(cart);
  }
}
