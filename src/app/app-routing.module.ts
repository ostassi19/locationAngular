import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import {AuthComponent } from './auth/auth.component';
import { DashProprietaireComponent } from './dash-proprietaire/dash-proprietaire.component';
import {ProductComponent} from './product/product.component';

const routes: Routes = [
  {path:"",component: ProductComponent},
  {path:"contacts", component: DashProprietaireComponent},
  {path:"Auth", component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
