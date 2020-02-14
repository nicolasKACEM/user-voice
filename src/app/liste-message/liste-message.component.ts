import { Component, OnInit } from '@angular/core';
import {MessagesService} from  '../Service/messages.service';


@Component({
  selector: 'app-liste-message',
  templateUrl: './liste-message.component.html',
  styleUrls: ['./liste-message.component.css']
})
export class ListeMessageComponent implements OnInit {

  constructor(private messageService: MessagesService) { }

  ngOnInit() {

    for(let i=0;i<this.messageService.getMessages().length;i++){
      console.log(this.messageService.getMessages()[i])
    }
  }

}