import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupOwnerComponent } from './components/signup-owner/signup-owner.component';
import { SignupClientComponent } from './components/signup-client/signup-client.component';
import { DashboardOwnerComponent } from './components/dashboard-owner/dashboard-owner.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { MaisonInfoComponent } from './components/maison-info/maison-info.component';
import { ModifierMaisonComponent } from './components/modifier-maison/modifier-maison.component';
import { ListeVillesComponent } from './components/liste-villes/liste-villes.component';
import { AjouterMaisonComponent } from './components/ajouter-maison/ajouter-maison.component';
import { AjouterChamberComponent } from './components/ajouter-chamber/ajouter-chamber.component';
import { InfochamberComponent } from './components/infochamber/infochamber.component';
import { RechercheMaisonComponent } from './components/recherche-maison/recherche-maison.component';


const routes: Routes = [
  { path: '', component:  HomeComponent },
  {path:'connexion',component: LoginComponent},
  {path:'signupOwner',component: SignupOwnerComponent},
  {path:'signupClient',component:SignupClientComponent},
  {path:'Dashboard',component:DashboardOwnerComponent},
  {path:'Accueil',component:AccueilComponent},
  {path:'maisonInfo/:id',component:MaisonInfoComponent},
  {path:'modifierMaison/:id', component:ModifierMaisonComponent},
  {path:'les villes', component:ListeVillesComponent},
  {path:'ajouterMaison',component:AjouterMaisonComponent},
  {path:'ajouterchamber',component:AjouterChamberComponent},
  {path:'infochamber/:id',component:InfochamberComponent},
  {path:'recherche',component:RechercheMaisonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
