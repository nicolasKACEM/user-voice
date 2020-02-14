import { Component, Input } from '@angular/core';
import { User } from '../models/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  user: User; 

 clicSurBouton(){
   console.log("restsfe");
 }

}