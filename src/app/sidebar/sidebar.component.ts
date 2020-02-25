import { Component, OnInit } from '@angular/core';
import {UsersService} from  '../Service/users.service';
import {MessagesService} from  '../Service/messages.service';
import { FormGroup,FormBuilder } from '@angular/forms';
import {Message} from  '../model/message';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
  
})
export class SidebarComponent implements OnInit {

  formulaireIdee : FormGroup;
  constructor( private formBuilder: FormBuilder,
    private userService: UsersService,
  private messages : MessagesService
  ) {}
  userName :string;
  ngOnInit() {

     console.log("ici :" + this.userService.getUser().pseudo);
     this.userName=this.userService.getUser().pseudo;
     this.initForm();
  }

  initForm() {
    this.formulaireIdee = this.formBuilder.group({
      message:'',
    });

  }

  ajoutMessage(){
    const formValue = this.formulaireIdee.value;
    console.log(formValue['message'] );
    
    this.messages.addMessage(new Message(formValue['message'],this.messages. getMessages().length));
     
   }

}