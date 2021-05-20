import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { CompteComponent } from './compte/compte.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileProprietaireComponent } from './profile-proprietaire/profile-proprietaire.component';
import { ProductComponent } from './product/product.component';
import { DashProprietaireComponent } from './dash-proprietaire/dash-proprietaire.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SidebareComponent } from './sidebare/sidebare.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { MaisonComponent } from './maison/maison.component';
import { GarrageComponent } from './garrage/garrage.component';
import { StudioComponent } from './studio/studio.component';
import { AppartementComponent } from './appartement/appartement.component';
import { TerrainComponent } from './terrain/terrain.component';
import {FormsModule} from '@angular/forms';
import { AddMaisonComponent } from './add-maison/add-maison.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
//import{} from '@agm/core' ; 
//import { GoogleMapsModule } from '@angular/google-maps'
//import {MatSidenavModule} from '@angular/material/sidenav';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactsComponent,
    HomeComponent,
    LoginComponent,
    AuthComponent,
    CompteComponent,
    NotFoundComponent,
    ProfileProprietaireComponent,
    ProductComponent,
    DashProprietaireComponent,
    SidebareComponent,
    MaisonComponent,
    GarrageComponent,
    StudioComponent,
    AppartementComponent,
    TerrainComponent,
    AddMaisonComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    FormsModule,
   
   // GoogleMapsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
