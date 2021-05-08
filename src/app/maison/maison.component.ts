import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maison',
  templateUrl: './maison.component.html',
  styleUrls: ['./maison.component.css']
})
export class MaisonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
redirectTo(){
  this.router.navigateByUrl('/add-maison');
}
}
