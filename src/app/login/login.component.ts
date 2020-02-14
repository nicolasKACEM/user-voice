import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/User.model';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulaireLogin :FormGroup;
  user: User; 
  constructor(private formBuilder: FormBuilder){

  }
  ngOnInit(){
    this.initForm();
  }
initForm() {
    this.formulaireLogin = this.formBuilder.group({
      pseudo: '',
    });
  }

 clicSurBouton(){
   const formValue = this.formulaireLogin.value;
   console.log(formValue['pseudo'])
 }

}