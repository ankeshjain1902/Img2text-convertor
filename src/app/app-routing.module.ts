import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component'; // Import your components
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  { path: 'home', component: ImageUploadComponent,canActivate: [AuthGuard] }, 
  { path: 'history', component: HistoryComponent }, // Example: HistoryComponent route
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
