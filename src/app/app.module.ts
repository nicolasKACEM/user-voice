import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { AjouterIdeeComponent } from './ajouter-idee/ajouter-idee.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  imports:      [ NgbModule, BrowserModule, FormsModule ],
  declarations: [ AppComponent, AjouterIdeeComponent, LoginComponent, SidebarComponent,  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
