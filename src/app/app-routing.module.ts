import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import {AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path:"Home",component: HomeComponent},
  {path:"Contacts", component: ContactsComponent},
  {path:"Auth", component: AuthComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
