import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { AjouterIdeeComponent } from './ajouter-idee/ajouter-idee.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './Service/users.service';
import { ListeMessageComponent } from './liste-message/liste-message.component';
import { MessagesService } from './Service/messages.service';
import { IsSignedInGuardGuard } from './Service/is-signed-in-guard.guard';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'ajouter-idee', component: AjouterIdeeComponent,canActivate: [
            IsSignedInGuardGuard
        ] },
  { path: '', component: LoginComponent }
];

@NgModule({
  imports:      [ NgbModule, BrowserModule, FormsModule, RouterModule.forRoot(appRoutes),ReactiveFormsModule],
  declarations: [ AppComponent, AjouterIdeeComponent, LoginComponent, SidebarComponent, ListeMessageComponent,  ],
  bootstrap:    [ AppComponent ],
  providers: [UsersService, MessagesService, IsSignedInGuardGuard],
 
})
export class AppModule { }
