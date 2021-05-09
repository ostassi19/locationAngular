import { noUndefined } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Router, RouterOutlet, RouterPreloader } from '@angular/router';
import {User} from '../src/app/Model/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router) { }
  users : User[]=[{"username":"admin","password":"123","roles":['ADMIN']},
                 {"username":"latifa","password":"123","roles":['USER']}

];

public loggedUser: string="Connexion";
public isLoggedIn: Boolean=false;
public roles:string[]=[""];
isAdmin():Boolean{
  if(!this.roles)
  return false;
  return (this.roles.indexOf('ADMIN') >-1);
}
logout(){
  this.isLoggedIn=false;
  this.loggedUser= "";
  this.roles = [""];
  localStorage.removeItem('loggeduser');
  localStorage.setItem('isLoggedIn',String(this.isLoggedIn));
  this.loggedUser="connexion";
  this.router.navigate(['/auth']);
}
SignIn(user: User): Boolean{
  let validUser: Boolean= false;
  this.users.forEach((curUser) => {
if(user.username === curUser.username && user.password==curUser.password ){
  validUser = true;
  this.loggedUser = String(curUser.username);
  this.isLoggedIn = true;
  this.roles= curUser.roles;
  localStorage.setItem('loggedUser',String(this.loggedUser));
  localStorage.setItem('isloggedIn', String(this.isLoggedIn));
}

  });
  return validUser;
}
}
