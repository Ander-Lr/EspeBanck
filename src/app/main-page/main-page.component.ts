import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importar Router

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  contacts = [
    { name: 'Ada Lovelace', image: 'assets/Logo-EspeBank.png' },
    { name: 'Anderson Lara', image: 'assets/Logo-EspeBank.png' },
    // Agrega más contactos aquí
  ];

  constructor(private router: Router) {} // Inyectar el Router

  // Método para manejar la navegación a diferentes páginas
  navigateToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }

  transfer(contact: any) {
    console.log('Transferir a:', contact.name);
    // Implementa la lógica de transferencia
  }
}
