import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-withdrawal-without-card',
  templateUrl: './withdrawal-without-card.page.html',
  styleUrls: ['./withdrawal-without-card.page.scss'],
})
export class WithdrawalWithoutCardPage {
  phoneNumber: string = '';
  amount: number = 0;

  constructor(private alertController: AlertController) {}

  // Validación del número de celular
  validatePhoneNumber(): boolean {
    const phoneNumberPattern = /^09\d{8}$/;  // Comienza con 09 y tiene 10 dígitos
    if (!phoneNumberPattern.test(this.phoneNumber)) {
      this.presentAlert('Error', 'El número de celular debe ser de 10 dígitos y comenzar con "09".');
      return false;
    }
    return true;
  }

  // Validación de la cantidad
  validateAmount(): boolean {
    if (this.amount <= 0 || this.amount > 500) {
      this.presentAlert('Error', 'La cantidad debe estar entre 0 y 500.');
      return false;
    }
    return true;
  }

  // Método para generar un código aleatorio
  generateRandomCode(): string {
    const code = Math.floor(100000 + Math.random() * 900000).toString(); // Genera un código de 6 dígitos
    return code;
  }

  // Método para solicitar el código
  async requestCode() {
    if (!this.validatePhoneNumber() || !this.validateAmount()) {
      return;
    }

    const generatedCode = this.generateRandomCode();
    this.presentAlert('Código Generado', `Se ha generado un código temporal: ${generatedCode}`);

    // Limpiar los campos después de generar el código
    this.resetForm();
  }

  // Método para limpiar los formularios
  resetForm() {
    this.phoneNumber = '';
    this.amount = 0;
  }

  // Método para mostrar alertas
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
}
