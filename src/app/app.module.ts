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
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
