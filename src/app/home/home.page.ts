import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';  // Importar AngularFirestore

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  accounts = [
    { name: 'Cuenta #1', balance: 1000.00 },
    { name: 'Cuenta #2', balance: 0.00 },
    { name: 'Cuenta #3', balance: 100.00 }
  ];

  amount: number = 0;
  accountNumber: string = '';
  idNumber: string = '';
  email: string = '';
  selectedBank: string = '';
  accountType: string = '';
  addToContacts: boolean = false;

  constructor(
    private alertController: AlertController,  // Inyectar AlertController
    private firestore: AngularFirestore  // Inyectar AngularFirestore
  ) {}

  // Validación de la cantidad
  validateAmount(): boolean {
    if (this.amount < 0 || this.amount > 500) {
      this.presentAlert('Error', 'La cantidad debe estar entre 0 y 500');
      return false;
    }
    return true;
  }

  // Validación del número de cédula
  validateIdNumber(): boolean {
    const isNumeric = /^\d{10}$/.test(this.idNumber);
    if (!isNumeric) {
      this.presentAlert('Error', 'El número de cédula debe tener exactamente 10 dígitos numéricos.');
      return false;
    }
    return true;
  }

  // Validación del correo electrónico
  validateEmail(): boolean {
    if (this.email.trim() === '') {
      return true; // Campo opcional, se considera válido si está vacío
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.email) || !this.email.endsWith('.com')) {
      this.presentAlert('Error', 'Ingrese un correo electrónico válido que contenga un "@" y termine en ".com".');
      return false;
    }
    return true;
  }

  // Validación de la cuenta en Firebase
  async validateAccount() {
    if (this.accountNumber.trim() === '') {
      this.presentAlert('Error', 'El número de cuenta no puede estar vacío');
      return;
    }

    try {
      const accountDoc = await this.firestore
        .collection('CountsTransfer', ref => ref.where('Account_number', '==', this.accountNumber))
        .get()
        .toPromise();

      if (accountDoc && !accountDoc.empty) {
        const accountData = accountDoc.docs[0].data() as { Name: string };
        this.presentAlert('Cuenta Encontrada', `Nombre: ${accountData.Name}`);
      } else {
        this.presentAlert('Error', 'Número de cuenta no encontrado');
      }
    } catch (error) {
      this.presentAlert('Error', 'Error al acceder a la base de datos');
    }
  }

  // Método para ejecutar la transferencia
  async transfer() {
    if (!this.validateAmount() || !this.validateIdNumber() || !this.validateEmail()) {
      return;
    }

    if (this.addToContacts) {
      try {
        await this.addToContactsCollection();
        this.presentAlert('Éxito', 'Los datos han sido guardados en contactos.');
      } catch (error) {
        this.presentAlert('Error', 'No se pudo agregar a contactos.');
        return;
      }
    }

    // Mostrar mensaje de éxito de la transferencia
    this.presentAlert('Éxito', 'La transferencia se realizó con éxito.');

    // Limpiar el formulario después de la transferencia
    this.resetForm();
  }

  // Método para agregar los datos a la colección CountsTransfer en Firebase
  async addToContactsCollection() {
    try {
      await this.firestore.collection('CountsTransfer').add({
        Account_number: this.accountNumber,
        ID_number: this.idNumber,
        Bank: this.selectedBank,
        Account_type: this.accountType,
        Email: this.email || '',  // Si el email no se proporcionó, guardar un string vacío
        Timestamp: new Date()  // Añadir un timestamp para referencia
      });
    } catch (error) {
      throw new Error('No se pudo agregar a contactos.');
    }
  }

  // Método para limpiar los formularios
  resetForm() {
    this.amount = 0;
    this.accountNumber = '';
    this.idNumber = '';
    this.email = '';
    this.selectedBank = '';
    this.accountType = '';
    this.addToContacts = false;
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
