import {Component, Input} from '@angular/core';
import {RatingModels} from "../models/rating.model";
import {Router} from "@angular/router";
import {RatingService} from "../services/rating.service";
import {AuthService} from "../services/auth.service";

// @ts-ignore
@Component({
  selector: 'ngbd-rating-template',
  templateUrl: './rating-template.html',
  styles: [`
    .star {
      font-size: 1.5rem;
      color: #b0c4de;
    }
    .filled {
      color: #1e90ff;
    }
    .bad {
      color: #deb0b0;
    }
    .filled.bad {
      color: #ff1e1e;
    }
  `]
})
export class NgbdRatingTemplate {

  private u: string | null = window.localStorage.getItem('user');
  User = JSON.parse(this.u? this.u :'');

  Ratings: RatingModels[]=[];
  AllRates=[];
  pourcentage =0;
  //sharing data between parent and child component
  @Input() Maison : any;
  constructor(
    public router: Router,
    public ratingService: RatingService,
    private authService: AuthService
  ) {}
  currentRate = 0;
  rate = 0;
  sum = 0;
  user= this.authService.parseJwt();
  ngOnInit(): void{
    this.calculerPourcentage();
    try {
      this.rate = this.Maison.ratings.find((value: any) => value.client.id == this.User.idClient).score;
      this.currentRate = this.rate;
    }catch (e) {

    }
  }

  getAllRatings(){
    this.ratingService.getRatingByIdMaison(this.Maison.id).subscribe(
      rating=>{
        this.Maison.ratings = rating;
        this.calculerPourcentage();
        this.Ratings = rating;
      }
    )
  }

  createRate(){
    console.log(this.currentRate, this.rate);
    if (this.rate == 0){
      this.rate = this.currentRate;
      // @ts-ignore
      this.Maison.ratings.push(this.currentRate);
      const r = new RatingModels();
      r.score = this.currentRate;
      this.ratingService.createRate({score: r.score, client: '/api/clients/'+this.User.idClient, maison: this.Maison['@id']}).subscribe(
        res =>{
          this.getAllRatings();
          console.log("test");
        }
      );
    }

  }

  calculerPourcentage(){
    let s=0;
    let j=0;
    for (let i=0; i<this.Maison.ratings.length;i++){
      s += this.Maison.ratings[i].score;j++;
    }
    this.pourcentage = s/j;
   console.log(this.pourcentage);
  }

}
