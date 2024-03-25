import { Component, inject } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ListComponent } from '../../components/list/list.component';
import { AuthService } from '../../auth.service';
import { CommonModule } from '@angular/common';  


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent,ListComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  authService = inject(AuthService)


}
