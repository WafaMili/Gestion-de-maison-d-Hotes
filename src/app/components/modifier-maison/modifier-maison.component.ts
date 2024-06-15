import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modifier-maison',
  templateUrl: './modifier-maison.component.html',
  styleUrls: ['./modifier-maison.component.css']
})
export class ModifierMaisonComponent implements OnInit {
  editForm: FormGroup;
  id: any;
  Maison: any = {};
  maisonTable:any =[
    {id_maison:1,nomMaison:"Dar Antonia ",nbChber:"5",adresse:"Sousse",description:"Dar Antonia est une maison d'hôtes élégante, elle offre six suites baignant dans une douce atmosphère où cohabitent harmonieusement luxe discret et style éclectique."},
    {id_maison:2,nomMaison:"Dar Marzouk ", nbChber:"5",adresse:"Djerba",description:"Dès le premier regard, on remarque de suite que Dar Marzouk est une maison d'architecte. Pour cela, il charge son cousin architecte de concevoir une maison qui s'inspire de l'architecture traditionnelle."},
    {id_maison:3,nomMaison:"Dar Saddik ",nbChber:"5",adresse:"Gafsa",description:"Offrant une vue sur le jardin, le dar seddik est situé à Gafsa. Il dispose d'un restaurant, d'une sécurité d'une journée, d'un bar, d'un jardin, d'une piscine extérieure et d'une aire de pique-nique. Vous bénéficierez gratuitement d'un parking privé et d'une connexion Wi-Fi. L'établissement propose des services, notamment des salles de réunion et de banquet ainsi que des cours de culture. "},
    {id_maison:4,nomMaison:"Dar Zyne La Médina ",nbChber:"5",adresse:"Tunis",description:"Dans le centre historique de Tunis, dans la rue du Trésor, se dissimule un trésor architectural datant du 16e siècle. Derrière une façade imposante, Dar Zyne se révèle comme un joyau représentatif de l'architecture traditionnelle de Tunis. Avec ses boiseries nobles, ses ferronneries et ses marbres d'époque, l'ancienne Dar Khojet el-Khil a fait l'objet d'importants travaux de restauration et renaît désormais grâce à l'engagement passionné d'un couple."}
  ];
  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder) { }
  Modifier(){
    console.log("la modification est effectuer");
    
  }
  ngOnInit() {
    console.log('Le composant ModifierMaisonComponent a été initialisé.');
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.Maison = this.maisonTable.find((Maison: { id_maison: any; }) => Maison.id_maison == this.id);

    if (this.Maison) {
      this.editForm = this.formBuilder.group({
        id_maison: [this.Maison.id_maison],
        nomMaison: [this.Maison.nomMaison],
        nbChber:[this.Maison.nbChber],
        adresse: [this.Maison.adresse],
        description: [this.Maison.description]
      });
    } else {
      // Traitez le cas où la maison avec l'ID spécifié n'est pas trouvée
      console.error(`Maison avec l'ID ${this.id} non trouvée.`);
    }
  }

  
}
