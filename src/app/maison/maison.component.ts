import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {MaisonService} from "../services/maison.service";
import {MaisonModel} from "../models/maison.model";

@Component({
  selector: 'app-maison',
  templateUrl: './maison.component.html',
  styleUrls: ['./maison.component.css']
})
export class MaisonComponent implements OnInit {

  Maison : any;
  Maisons : MaisonModel[]=[]
  //any = [{nom : 'maison1', prix: 22}, {nom : 'maison2', prix: 22}]
  constructor(
    private router: Router,
    private modalService: NgbModal,
    private maisonService: MaisonService,
  ) {
    this.getAllMaison();
  }

  ngOnInit(): void {
  }

  getAllMaison(){
   this.maisonService.getMaisons().subscribe(
     maison=>{
       this.Maisons = maison['hydra:member'];
     }
   )
  }
  open(maison : any) {
    this.Maison = maison;
    console.log(this.Maison);
  }
redirectTo(){
  this.router.navigateByUrl('/add-maison');
}
}
