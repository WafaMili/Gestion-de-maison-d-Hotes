import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ajouter-chamber',
  templateUrl: './ajouter-chamber.component.html',
  styleUrls: ['./ajouter-chamber.component.css']
})
export class AjouterChamberComponent implements OnInit {
  chambreForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.chambreForm = this.fb.group({
      nom: ['', Validators.required],
      capacite: ['', Validators.required],
      description: [''],
      prix: ['', Validators.required],
    });
  }
  ajouterChambre() {
   
    console.log('Chambre ajoutée :', this.chambreForm.value);
   
  }}
