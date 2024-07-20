import { Component } from '@angular/core';
import { ImageService } from '../image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: ImageService, private router: Router) {}

  onSubmit() {
    this.authService.login({ username: this.username, password: this.password }).subscribe(
      (token: any) => {
        console.log(token)
        localStorage.setItem('token', token);
        this.router.navigate(['/']);
      },
      error => {
        console.error(error);
        alert('Login failed');
      }
    );
  }
}
