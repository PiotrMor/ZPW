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
    return this.db.collection(this.path).add(newUser);
  }

  getUser(userId: string): Observable<User> {
    return this.db.doc<User>(this.path + userId).snapshotChanges().pipe(map(changes => {
      const data: User = changes.payload.data();
      const id = changes.payload.id;
      return {id, ...data};
    }))
  }
}