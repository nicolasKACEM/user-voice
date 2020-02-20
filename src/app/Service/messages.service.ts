import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {

  messages: Array<String>=[]

  constructor() { this.messages.push("test")}

  getMessages(): String[] {
    return this.messages;
  }

  addMessage(message : String){
 
       this.messages.push(message);
    
  }

}