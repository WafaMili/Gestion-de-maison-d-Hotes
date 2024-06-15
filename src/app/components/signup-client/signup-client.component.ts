import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators ,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-client',
  templateUrl: './signup-client.component.html',
  styleUrls: ['./signup-client.component.css']
})
export class SignupClientComponent implements OnInit {
  signupClientForm:FormGroup
  constructor(private formBuilder: FormBuilder ,private router:Router) { }
  signupClient(){
    console.log("here user ",this.signupClientForm.value);
    this.router.navigate(["Accueil"])
  }
  ngOnInit() {
    this.signupClientForm = this.formBuilder.group({
      Nom: ['',[Validators.required]],
      Prenom: ['',[Validators.required]],
      telephone: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(8)]],
      adresse: ['',[Validators.required]],
      Email: ['',[Validators.required,Validators.email]],
      Pwd: ['',[Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
      
    });
    
  }

}
