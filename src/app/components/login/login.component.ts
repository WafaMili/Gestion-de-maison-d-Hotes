import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm :FormGroup;

  constructor(private formBilder :FormBuilder) { }
  login(){
    console.log("Here user ",this.loginForm.value);
  }

  ngOnInit() {
    console.log("here into Init , login");
    this.loginForm=this.formBilder.group({
      Email:["",[Validators.required,Validators.email]],
      Pwd :["",[Validators.required,Validators.minLength(4),Validators.maxLength(8)]],
    })
    
  }

}
