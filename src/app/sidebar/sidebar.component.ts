import { Component, OnInit } from '@angular/core';
import {UsersService} from  '../Service/users.service';
import {MessagesService} from  '../Service/messages.service';
import { FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  formulaireIdee :FormGroup;
  constructor( private formBuilder: FormBuilder,
    private userService: UsersService,
  private messages : MessagesService
  ) { }
  userName :string;
  ngOnInit() {

     console.log("ici :" + this.userService.getUser().pseudo);
     this.userName=this.userService.getUser().pseudo;
  }

  initForm() {
    this.formulaireIdee = this.formBuilder.group({
      message: '',
    });

  }

  ajoutMessage(){
    const formValue = this.formulaireIdee.value;
    this.messages.ajoutMessage(formValue['message'])
    console.log(formValue['message'])
  }

}