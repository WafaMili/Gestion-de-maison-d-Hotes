import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-owner',
  templateUrl: './signup-owner.component.html',
  styleUrls: ['./signup-owner.component.css']
})
export class SignupOwnerComponent implements OnInit {
  signupOwnerForm:FormGroup;
  constructor(private formBuilder: FormBuilder,private Route:Router) { }
  signupOwner(){
    console.log("here user ",this.signupOwnerForm.value);
    this.Route.navigate(["Dashboard"])
    
  }

  ngOnInit() {
    this.signupOwnerForm = this.formBuilder.group({
      Nom: ['',[Validators.required]],
      Prenom: ['',[Validators.required]],
      telephone: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
      adresse: ['',[Validators.required]],
      Email: ['',[Validators.required,Validators.email]],
      Pwd: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
      
    });
    
  }

}
