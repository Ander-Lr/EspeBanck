import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  onSubmit(event: Event) {
    event.preventDefault(); // Esto evita que el formulario cause una recarga de la página
    // Aquí colocas la lógica para la creación de cuenta
    // Ejemplo: llamada a un servicio para registrar un nuevo usuario
  }
}