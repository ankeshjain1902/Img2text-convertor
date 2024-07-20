import { Component } from '@angular/core';
import { ImageService } from '../image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: ImageService, private router: Router) {}

  onSubmit() {
    this.authService.register({ username: this.username, password: this.password }).subscribe(
      (res) => {
        console.log('Registration successful:', res);
        alert('Registration succcesful');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Registration failed:', error);
        if (error.status === 400 && error.error === 'User already registered.') {
          alert('User already exists. Please choose a different username.');
        } else {
          alert('Registration failed');
        }
      }
    );
  }

}
