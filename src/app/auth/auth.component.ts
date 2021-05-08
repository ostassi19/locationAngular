import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(
    public router: Router,
    public authService: AuthService
  ) { }
  isLoginMode = true;
  // tslint:disable-next-line:typedef
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }
  ngOnInit(): void {
    console.log("eeeeeeeee");
  }
  // tslint:disable-next-line:typedef
  redirectToDashP(){
    this.router.navigateByUrl('/contacts');
  }
  onSubmit(form: NgForm){
    console.log(form.value);
    const authData = {
      username: form.value.username,
      password: form.value.password
    };
    this.authService.login(authData.username, authData.password).subscribe(
      res => {
        console.log(res);
        window.localStorage.setItem("token", res.token);
        let User = this.authService.parseJwt();
        console.log(User.username, User.roles);
        this.redirectToDashP();
      }
    );
    form.reset();
  }

}
