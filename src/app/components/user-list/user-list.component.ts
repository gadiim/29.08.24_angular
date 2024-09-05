import { Component } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { NgForOf } from '@angular/common';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgForOf, DatePipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: User[] = [];
  constructor(private userService: UserService, private router: Router){};

  ngOnInit():void{
    this.users = this.userService.getUsers();
  };

  deleteUser(id: number):void{
    this.userService.deleteUser(id);
    this.users = this.userService.getUsers();
  };

  editUser(id: number) {
    this.router.navigate([`/users/edit/${id}`]);
  };

}
