import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive], // AJOUTER ICI LE ROUTAGE
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
// Dans header.ts et navbar.ts : injecter le service
public authService = inject(AuthService);
}
