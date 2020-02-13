import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { AjouterIdeeComponent } from './ajouter-idee/ajouter-idee.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports:      [ NgbModule, BrowserModule, FormsModule ],
  declarations: [ AppComponent, AjouterIdeeComponent, LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
