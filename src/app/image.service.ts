 

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 

import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private apiUrl = 'http://localhost:5000'; // Replace with your backend URL

  

  constructor(private http: HttpClient,private router: Router) {}


  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }


  uploadImage(imageData: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/upload`, imageData);
  }

  getImages(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/images`);
  }
}
