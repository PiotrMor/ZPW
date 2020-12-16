import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private path = 'users/';

  constructor(private db: AngularFirestore ) { 
  }

  addUser(newUser: User): Promise<any> {
    return this.db.collection(this.path).doc(newUser.id).set(newUser);
  }

  getUser(userId: string): Observable<User> {
    return this.db.collection(this.path).doc<User>(userId).get().pipe(map(d => d.data()));
  }
}