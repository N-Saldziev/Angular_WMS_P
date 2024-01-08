import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { InventoryManagmentComponent } from './inventory-managment/inventory-managment.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
// import { GItems } from '@angular/GItems';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    InventoryManagmentComponent,
    LoginComponent,
    SignInComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'WM_Tests_001';
}

// This is a problem is that i need to learn something's