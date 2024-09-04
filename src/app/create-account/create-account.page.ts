import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Importa Firestore
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.page.html',
  styleUrls: ['./create-account.page.scss'],
})
export class CreateAccountPage implements OnInit {

  // Variables para los campos del formulario
  nombres: string = '';
  apellidos: string = '';
  cedula: string = '';
  email: string = '';
  fechaNacimiento: string = '';
  celular: string = '';
  usuario: string = '';
  password: string = '';
  confirmPassword: string = '';
  ciudad: string = '';

  constructor(
    private router: Router, 
    private firestore: AngularFirestore,
    private toastController: ToastController
  ) { }

  ngOnInit() { }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  async onSubmit(event: Event) {
    event.preventDefault(); // Evita la recarga de la página

    // Validaciones de los campos
    if (!this.validateCedula(this.cedula)) {
      this.presentToast('La cédula de identidad debe contener solo números.');
      return;
    }

    if (!this.validateEmail(this.email)) {
      this.presentToast('El correo electrónico no es válido. Debe contener un @ y un dominio (.com).');
      return;
    }

    if (!this.validatePassword(this.password)) {
      this.presentToast('La contraseña debe contener letras, números y al menos un carácter especial.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.presentToast('Las contraseñas no coinciden.');
      return;
    }

    // Creación del documento en la colección Users
    try {
      await this.firestore.collection('Users').add({
        nombres: this.nombres,
        apellidos: this.apellidos,
        cedula: this.cedula,
        email: this.email,
        fechaNacimiento: this.fechaNacimiento,
        celular: this.celular,
        usuario: this.usuario,
        password: this.password,
        ciudad: this.ciudad
      });

      // Limpiar los campos del formulario
      this.clearForm();

      // Enviar una notificación de éxito
      this.presentToast('Cuenta creada exitosamente.');

      // Opcionalmente, podrías redirigir al usuario a otra página
      // this.router.navigate(['/login']);

    } catch (error) {
      console.error('Error al crear la cuenta:', error);
      this.presentToast('Ocurrió un error al crear la cuenta. Intente nuevamente.');
    }
  }

  validateCedula(cedula: string): boolean {
    return /^\d+$/.test(cedula); // Verifica que solo contenga números
  }

  validateEmail(email: string): boolean {
    // Verifica que tenga un formato básico de email (contiene "@" y un dominio ".com")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
  }

  validatePassword(password: string): boolean {
    // Verifica que contenga al menos una letra, un número y un carácter especial
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  }

  clearForm() {
    this.nombres = '';
    this.apellidos = '';
    this.cedula = '';
    this.email = '';
    this.fechaNacimiento = '';
    this.celular = '';
    this.usuario = '';
    this.password = '';
    this.confirmPassword = '';
    this.ciudad = '';
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
