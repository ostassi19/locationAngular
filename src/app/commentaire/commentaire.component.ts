import { Component, OnInit } from '@angular/core';
import {CommentaireService} from "../services/commentaire.service";
import {CommentaireModels} from "../models/commentaire.model";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {

  Comentaires: CommentaireModels[]=[];
  moncommentire="";
  postComment=[];

  constructor(
    public router: Router,
    public commentaireService: CommentaireService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getAllCommentaire();
  }
  user= this.authService.parseJwt();
  post(){
    console.log(this.moncommentire);
    let user = this.authService.parseJwt();
    console.log(user.username, user.id, user.roles);
    // @ts-ignore
    this.postComment.push(this.moncommentire);
    const c = this.createComm();
    this.commentaireService.createCommentaire({comm: this.moncommentire, utilisateur: user.username}).subscribe();

    this.moncommentire='';
  }

  getAllCommentaire(){
    this.commentaireService.getCommentaire().subscribe(
      comment=>{
        this.Comentaires = comment ['hydra:member'];
      }

    )
  }

  createComm(){
    const Comm= new CommentaireModels();
    Comm.comm= this.moncommentire;
    return Comm;
  }
}
