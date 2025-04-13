import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { User } from 'src/app/Models/user.model';

@Component({
  selector: 'app-admin-users-manage',
  templateUrl: './admin-users-manage.component.html',
  styleUrls: ['./admin-users-manage.component.css']
})
export class AdminUserManageComponent implements OnInit {
  Users: User[] = [];
  editUserForm: FormGroup;
  currentUser: User | null = null;
  showModal: boolean = false;
  formHeader: string = "Add User";

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.editUserForm = this.fb.group({
      name: [''],
      email: [null],
      password: [null],
      role: [null],
      
    });
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.Users = data;
    });
  }

  openAddUserForm(): void {
    this.currentUser = {userID:0, name: '', email: '', password: '', role: '' };
    this.editUserForm.reset();
    this.formHeader = "Add User";
    this.showModal = true;
  }

  openEditModal(user: User): void {
    this.currentUser = user;
    this.editUserForm.patchValue(user);
    this.formHeader = "Edit User";
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  onSubmit(): void {
    if (this.currentUser) {
      const updatedUser = { ...this.currentUser, ...this.editUserForm.value };
      if (this.formHeader === "Add User") {
        this.userService.addUser(updatedUser).subscribe((newUser) => {
          alert("User is added successfully");
          this.Users.push(newUser);
          this.closeModal();
        });
      } else {
        this.userService.editUser(updatedUser).subscribe((updatedBook) => {
          alert("User is updated successfully");
          this.Users = this.Users.map(b => b.userID== updatedUser.userID ? updatedUser : b);
          this.closeModal();
        });
      }
    }
  }

  deleteUser(user: User): void {
    const confirmation = confirm(`Are you sure you want to delete the User: ${user.name}?`);
    if (confirmation) {
      this.userService.deleteUser(user.userID).subscribe(() => {
        alert("User is deleted successfully");
        this.Users = this.Users.filter(b => b.userID !== user.userID);
      });
    }
  }
}
