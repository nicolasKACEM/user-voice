import { Component, OnInit,Input } from '@angular/core';
import { User } from '../model/User.model';
import {UsersService} from  '../Service/users.service';

@Component({
  selector: 'app-ajouter-idee',
  templateUrl: './ajouter-idee.component.html',
  styleUrls: ['./ajouter-idee.component.css']
})
export class AjouterIdeeComponent implements OnInit {

  @Input() user: User
  constructor( private userService: UsersService) { }

  ngOnInit() {

    console.log("ici :" + this.userService.getUser());
  }

}