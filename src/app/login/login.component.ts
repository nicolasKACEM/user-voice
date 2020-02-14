import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/User.model';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ListeUser } from '../model/ListeUser.model';
import {UsersService} from  '../Service/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulaireLogin :FormGroup;
  user: User; 
  listeUser: ListeUser;

  constructor(private formBuilder: FormBuilder, 
  private router : Router,
  private userService : UsersService){

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
   console.log(formValue['pseudo']);
   this.user = new User(formValue['pseudo']);
    this.userService.setUser(this.user);
 }

}