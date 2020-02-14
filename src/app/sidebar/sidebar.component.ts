import { Component, OnInit } from '@angular/core';
import {UsersService} from  '../Service/users.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( private userService: UsersService) { }
  userName :string;
  ngOnInit() {

     console.log("ici :" + this.userService.getUser().pseudo);
     this.userName=this.userService.getUser().pseudo;
  }

}