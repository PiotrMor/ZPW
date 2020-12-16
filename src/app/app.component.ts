import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ZPW';
  isLogged: boolean = false;
  isAdmin: boolean = false;

  constructor(private authService: AuthService, private authGuard: AuthGuard, private adminGuard: AdminGuard) {
  }

  ngOnInit(): void {
    this.isLoggedIn();
    this.hasAdminRole();
  }

  logout() {
    this.authService.logout().then(succ => console.log("Wylogowano!"));
  }

  isLoggedIn() {
    this.authGuard.canActivate(null, null).subscribe(result => {
      this.isLogged = result;
    });
  }

  hasAdminRole() {
    this.adminGuard.canActivate(null, null).subscribe(result => {
      this.isAdmin = result;
    });
  }

  update() {
    this.isLoggedIn();
    this.hasAdminRole();
  }
}
