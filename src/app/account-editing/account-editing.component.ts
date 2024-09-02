import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';  // Importar Router

@Component({
  selector: 'app-account-editing',
  templateUrl: './account-editing.component.html',
  styleUrls: ['./account-editing.component.scss'],
})
export class AccountEditingComponent implements OnInit {

  constructor(private router: Router) { }  // Inyectar Router

  ngOnInit() {}

  // Método para cerrar sesión y redirigir a la página de login
  logout() {
    this.router.navigate(['/login']);
  }
}
