import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {UsersService} from  '../Service/users.service';

@Injectable({
  providedIn:'root'
})
export class IsSignedInGuardGuard implements CanActivate {

    constructor( private userService: UsersService){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(this.userService.user.pseudo!=null)
      return (this.userService.user.pseudo.trim()!="");
    return false
  }
}
