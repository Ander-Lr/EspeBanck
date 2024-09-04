import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { environment } from '../../environments/environment'; // Importa el archivo de configuración
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor(
    private router: Router, 
    private firestore: AngularFirestore,
    private toastController: ToastController
  ) {}

  ngOnInit() {}

  async onSubmit() {
    if (this.email.trim() === '' || this.password.trim() === '') {
      this.presentToast('Por favor, complete todos los campos');
      return;
    }

    try {
      // Realiza la búsqueda en la colección 'Users' para verificar credenciales
      const userSnapshot = await this.firestore.collection('Users', ref => 
        ref.where('Email', '==', this.email)
           .where('Password', '==', this.password)
      ).get().toPromise();

      if (!userSnapshot || userSnapshot.empty) {
        this.presentToast('Correo electrónico o contraseña incorrectos');
        return;
      }

      // Obtén el User_id del primer documento encontrado
      const userData = userSnapshot.docs[0].data() as { User_id: string };
      const userId = userData.User_id;

      // Almacena el User_id en la variable global
      environment.envUser_Id = userId;

      // Navega a la página principal
      this.router.navigate(['/main-page']);
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      this.presentToast('Ocurrió un error. Por favor, inténtelo de nuevo.');
    }
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

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
}
