import { Injectable } from '@angular/core';
import { USERS } from './mock-user';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private users: User[] = USERS;
  constructor() { };

  getUsers(): User[]{
    return this.users;
  };

  getUser(id:number):User|undefined{
    return this.users.find(u=>u.id===id);
  };
 
  addUser(user:User):void{
    this.users.push(user);
  };
 
  updateUser(updatedUser:User):void{
    const index = this.users.findIndex(u=>u.id===updatedUser.id);
    if(index !== -1){
      this.users[index] = updatedUser;
    };
  };
 
  deleteUser(id:number):void{
    this.users = this.users.filter(u=>u.id!==id);
  };

  deleteUsers(): void {
    this.users = [];
  };
};
