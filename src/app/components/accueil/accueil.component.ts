import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  maisonTable:any =[
    {id_maison:1,nomMaison:"Dar Antonia ",adresse:"Sousse",image:"assets/images/img_1.jpg",description:"Dar Antonia est une maison d'hôtes élégante, elle offre six suites baignant dans une douce atmosphère où cohabitent harmonieusement luxe discret et style éclectique."},
    {id_maison:2,nomMaison:"Dar Marzouk ",adresse:"Djerba",image:"assets/images/img_2.jpg",description:"Dès le premier regard, on remarque de suite que Dar Marzouk est une maison d'architecte. Pour cela, il charge son cousin architecte de concevoir une maison qui s'inspire de l'architecture traditionnelle."},
    {id_maison:3,nomMaison:"Dar Saddik ",adresse:"Gafsa",image:"assets/images/img_3.jpg",description:"Offrant une vue sur le jardin, le dar seddik est situé à Gafsa. Il dispose d'un restaurant, d'une sécurité d'une journée, d'un bar, d'un jardin, d'une piscine extérieure et d'une aire de pique-nique. Vous bénéficierez gratuitement d'un parking privé et d'une connexion Wi-Fi. L'établissement propose des services, notamment des salles de réunion et de banquet ainsi que des cours de culture. "},
    {id_maison:4,nomMaison:"Dar Zyne La Médina ",adresse:"Tunis",image:"assets/images/img_4.jpg",description:"Dans le centre historique de Tunis, dans la rue du Trésor, se dissimule un trésor architectural datant du 16e siècle. Derrière une façade imposante, Dar Zyne se révèle comme un joyau représentatif de l'architecture traditionnelle de Tunis. Avec ses boiseries nobles, ses ferronneries et ses marbres d'époque, l'ancienne Dar Khojet el-Khil a fait l'objet d'importants travaux de restauration et renaît désormais grâce à l'engagement passionné d'un couple."}
  ];

  constructor( private router:Router) { }
  gotoAfficher(id:number){
  this.router.navigate(['infochamber/'+ id])
  }
  ngOnInit() {
    
  }

}
