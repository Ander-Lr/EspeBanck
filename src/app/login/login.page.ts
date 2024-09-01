import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  togglePasswordVisibility() {
    const passwordField = document.getElementById("password") as HTMLInputElement;
    const togglePassword = document.getElementById("togglePassword");

    if (passwordField && togglePassword) {
      if (passwordField.type === "password") {
        passwordField.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
      } else {
        passwordField.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
      }
    }
  }

  navigateToRegister() {
    this.router.navigate(['/create-account']);  // Navega a la página de creación de cuenta
  }

  onSubmit() {
    this.router.navigate(['/main-page']); // Navega al componente main-page al iniciar sesión
  }
}
