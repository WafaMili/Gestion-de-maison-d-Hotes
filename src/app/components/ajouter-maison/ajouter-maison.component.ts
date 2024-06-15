import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajouter-maison',
  templateUrl: './ajouter-maison.component.html',
  styleUrls: ['./ajouter-maison.component.css']
})
export class AjouterMaisonComponent implements OnInit {
  ajoutMaisonForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
 Ajouter(){
  console.log('ajout avec succe',this.ajoutMaisonForm.value);
  
 }
  ngOnInit() {
    this.ajoutMaisonForm = this.formBuilder.group({
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      description: ['', Validators.required],
      nbChber: ['', Validators.required]
      
    });
  }

}
