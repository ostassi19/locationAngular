import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import {AuthService} from "../services/auth.service";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

//user= new User();
erreur=0;
 // constructor(private authService:AuthService,private router: Router) { }

  constructor(
    public router: Router,
    public authService: AuthService,
    public userService: UserService
  ) { }
  isLoginMode = true;
  // tslint:disable-next-line:typedef
  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    //this.redirectToDashP();
    //this.router.navigateByUrl('');
  }
  ngOnInit(): void {
    console.log("eeeeeeeee");
  }
  // tslint:disable-next-line:typedef
  redirectToDashP(){
    this.router.navigateByUrl('maison');
  }
  onSubmit(form: NgForm){
    console.log(form.value);
    const authData = {
      username: form.value.username,
      password: form.value.password
    };
    window.localStorage.clear();
    this.authService.login(authData.username, authData.password).subscribe(
      (res:any) => {
        //console.log(res.headers);
        //let t = document.cookie
        window.localStorage.setItem("token", res.token);
        //let User = this.authService.parseJwt();
        this.userService.getUser(authData.username).subscribe(
          res => {
            window.localStorage.setItem("user",JSON.stringify(res));

          }
        )
        this.redirectToDashP();
      }
    );
    form.reset();
  }

  /*
onLoggedin(){
  console.log(this.user);
  let isValidUser: Boolean = this.authService.SignIn(this.user);
  if(isValidUser){
    if(this.authService.isAdmin()){
      this.router.navigate(['/maison']);

    }
    else{
      this.router.navigate(['/']);
     }
  }
  else{
    this.erreur=1;
  }
}
*/
}
