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

  }
  addNote(message:Message){

    message.note++;
}
  minNote(message:Message){
    message.note--;
}
supprimer(message:Message){
  if(message.auteur == this.user.pseudo )
 this.messageService.messages.splice(this.messageService.messages.indexOf(message), 1);
}

}