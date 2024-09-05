import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserService } from './services/user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterLink, RouterOutlet, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '29.08.24_routes';

  users: User[] = [];

  constructor(private userService: UserService, private router: Router) {}

  // navigateTo(path: string) {
  //   this.router.navigate([path]);
  // }

  navigateToUsers() {
    this.router.navigate([`/users`]);
  };

  navigateToAddList() {
    this.router.navigate([`/users/add`]);
  };

  deleteUsers():void{
    this.userService.deleteUsers();
    this.users = this.userService.getUsers();
  };
}
