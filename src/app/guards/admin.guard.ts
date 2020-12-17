import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { observable, Observable, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.authState$.pipe(switchMap(firebaseUser => {
      let subject: Subject<boolean> = new Subject<boolean>();
      if (firebaseUser == null) {
        subject.next(false);
        return subject.asObservable();
      }

      return this.userService.getUser(firebaseUser.uid).pipe(map(user => {
        console.log(user);
        return user.role === 'admin';
      }))
    }));
  }

}
