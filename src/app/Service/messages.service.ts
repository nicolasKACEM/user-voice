import { Injectable } from '@angular/core';
import {Message} from  '../model/message';
@Injectable()
export class MessagesService {

  messages: Array<Message>=[]

  constructor() {}

  getMessages(): Message[] {
    return this.messages;
  }

  addMessage(message : Message){
 
       this.messages.push(message);
    
  }

}