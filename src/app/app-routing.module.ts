import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import {AuthComponent } from './auth/auth.component';
import { DashProprietaireComponent } from './dash-proprietaire/dash-proprietaire.component';
import {ProductComponent} from './product/product.component';
import { MaisonComponent } from './maison/maison.component';
import { GarrageComponent } from './garrage/garrage.component';
import { AppartementComponent } from './appartement/appartement.component';
import { StudioComponent } from './studio/studio.component';
import { TerrainComponent } from './terrain/terrain.component';
import { ProduitGuard } from './produit.guard';
import { AddMaisonComponent } from './add-maison/add-maison.component';

const routes: Routes = [
  {path:"product",component: ProductComponent},
  
  {path:"Auth", component: AuthComponent},
  {path:"",redirectTo: "product", pathMatch: "full"},
  {path :"maison",component: MaisonComponent},
  {path :"garrage",component: GarrageComponent},
  {path :"appartement",component: AppartementComponent},
  {path :"studio",component: StudioComponent},
  {path :"terrain",component: TerrainComponent},
  {path :"add-maison",component: AddMaisonComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
