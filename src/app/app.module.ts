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
import {FormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import { CommentaireComponent } from './commentaire/commentaire.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbdRatingTemplateModule} from "./rating/rating-template.module";
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
    CommentaireComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatDividerModule,
    FormsModule,
    NgbModule,
    NgbdRatingTemplateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
