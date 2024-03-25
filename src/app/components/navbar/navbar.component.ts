import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { AuthService } from '../../auth.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,MatMenuModule,MatButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() {
  }

}
