import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListeVillesComponent } from './components/liste-villes/liste-villes.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { SignupOwnerComponent } from './components/signup-owner/signup-owner.component';
import { SignupClientComponent } from './components/signup-client/signup-client.component';
import { DashboardOwnerComponent } from './components/dashboard-owner/dashboard-owner.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { MaisonInfoComponent } from './components/maison-info/maison-info.component';
import { ModifierMaisonComponent } from './components/modifier-maison/modifier-maison.component';
import { AjouterMaisonComponent } from './components/ajouter-maison/ajouter-maison.component';
import { AjouterChamberComponent } from './components/ajouter-chamber/ajouter-chamber.component';
import { InfochamberComponent } from './components/infochamber/infochamber.component';
import { RechercheMaisonComponent } from './components/recherche-maison/recherche-maison.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListeVillesComponent,
    HomeComponent,
    LoginComponent,
    SignupOwnerComponent,
    SignupClientComponent,
    DashboardOwnerComponent,
    AccueilComponent,
    MaisonInfoComponent,
    ModifierMaisonComponent,
    AjouterMaisonComponent,
    AjouterChamberComponent,
    InfochamberComponent,
    RechercheMaisonComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
