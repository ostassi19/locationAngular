import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Model/user.model';
import {NgForm} from '@angular/forms';
import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  
user= new User();
erreur=0;
  constructor(private authService:AuthService,private router: Router) { }

  ngOnInit(): void {
  }
  redirectToDashP(){
    this.router.navigateByUrl('maison');
  }
  
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
}
