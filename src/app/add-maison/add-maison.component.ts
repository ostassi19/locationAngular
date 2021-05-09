import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
@Component({
  selector: 'app-add-maison',
  templateUrl: './add-maison.component.html',
  styleUrls: ['./add-maison.component.css']
})
export class AddMaisonComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit(): void {
  }
redirectTo(){
  this.router.navigateByUrl('/maison');
}
}
