import { Component, OnInit } from '@angular/core';
import {MessagesService} from  '../Service/messages.service';
import {UsersService} from  '../Service/users.service';
import {User} from  '../model/User.model';
import {Message} from  '../model/message';
@Component({
  selector: 'app-liste-message',
  templateUrl: './liste-message.component.html',
  styleUrls: ['./liste-message.component.css']
})
export class ListeMessageComponent implements OnInit {

  public messages:Message[];
 
  public user:User;
  constructor(private messageService: MessagesService, private userService: UsersService) { }

  ngOnInit() {
    this.messages=this.messageService.getMessages();
    this.user=this.userService.getUser();
if(!this.messageService.getMessages()) return;
    for(let i=0;i<this.messageService.getMessages().length;i++){
      console.log("dans la liste"+this.messageService.getMessages()[i])
    }
  }

}