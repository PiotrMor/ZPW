import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/model/Credentials';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup(
    {
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    }
  );

  roles: string[] = [
    "Klient",
    "Administrator"
  ]

  rolesMap = {
    "Klient": "user",
    "Administrator": "admin"
  }
  selectedRole: string;

  constructor(private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let credentials: Credentials;
    credentials = this.registerForm.value;
    console.log(credentials);
    this.authService.register(credentials).then(result => {
        this.userService.addUser({
          id: result.user.uid,
          email: result.user.email,
          role: this.rolesMap[this.selectedRole]
        }).then(() => "New user created");
      this.router.navigate(["trips"]);
    }).catch(err => console.log("Błędne dane logowania!"));
  }


}
