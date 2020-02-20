import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {

  messages: String[]

  constructor() { }

  getMessages(): String[] {
    return this.messages;
  }

  addMessage(message : String){

    if(this.messages!=null)
      this.messages[this.messages.length]=message;
    else{
       this.messages[0]=message;
    } 
  }

}