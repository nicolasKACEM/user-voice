import { Injectable } from '@angular/core';
import { User } from '../model/User.model';

@Injectable()
export class UsersService {

user : User;

  constructor() { }

  setUser(user1 : User){

    this.user=user1
  }

  getUser(): User{

    return this.user;
  }
}