import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/model/Credentials';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup(
    {
      email: new FormControl('', Validators.required),
      password: new FormControl('',Validators.required)
    }
  );
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    let credentials: Credentials;
    credentials = this.loginForm.value;
    this.authService.login(credentials).then(success => this.router.navigate(["trips"]).catch(err => console.log("Błędne dane logowania!")));
  }

}
