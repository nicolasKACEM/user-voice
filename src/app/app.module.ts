import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { AjouterIdeeComponent } from './ajouter-idee/ajouter-idee.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'ajouter-idee', component: AjouterIdeeComponent },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports:      [ NgbModule, BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, AjouterIdeeComponent, LoginComponent, SidebarComponent,  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
