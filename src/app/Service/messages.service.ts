import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {

  messages: String[]

  constructor() { }

  getMessages(): String[] {
    return this.messages;
  }

  addMessage(message : String){

    this.messages[this.messages.length]=message 
  }

}