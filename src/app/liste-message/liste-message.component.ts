import { Component, OnInit } from '@angular/core';
import {MessagesService} from  '../Service/messages.service';
import {userService} from  '../Service/users.service';

@Component({
  selector: 'app-liste-message',
  templateUrl: './liste-message.component.html',
  styleUrls: ['./liste-message.component.css']
})
export class ListeMessageComponent implements OnInit {

  public messages:String[];

  constructor(private messageService: MessagesService, private userService) { }

  ngOnInit() {
    this.messages=this.messageService.getMessages();

if(!this.messageService.getMessages()) return;
    for(let i=0;i<this.messageService.getMessages().length;i++){
      console.log("dans la liste"+this.messageService.getMessages()[i])
    }
  }

}