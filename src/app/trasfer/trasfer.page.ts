import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';  // Para mostrar alertas
import { AngularFirestore } from '@angular/fire/compat/firestore';  // Importar AngularFirestore

@Component({
  selector: 'app-trasfer',
  templateUrl: './trasfer.page.html',
  styleUrls: ['./trasfer.page.scss'],
})
export class TrasferPage {
  amount: number = 0;
  accountNumber: string = '';
  email: string = '';
  addToContacts: boolean = false;
  fromAccount: string = '';
  toAccount: string = '';

  accounts = [
    { name: 'Cuenta #1', balance: 1000 },
    { name: 'Cuenta #2', balance: 0 },
    { name: 'Cuenta #3', balance: 100 }
  ];

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

  // Método para buscar el número de cuenta en Firebase
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

  // Método para transferir fondos
  async transfer(amount: number, fromAccount: string, toAccount: string) {
    // Validar la cantidad antes de proceder con la transferencia
    if (!this.validateAmount()) {
      return;
    }

    // Lógica de transferencia aquí (puedes agregar más lógica según sea necesario)
    console.log('Transferencia en proceso...');

    // Agregar a contactos si está marcado
    if (this.addToContacts) {
      try {
        await this.addToContactsCollection(this.accountNumber, this.email);
        this.presentAlert('Éxito', 'Contacto agregado exitosamente.');
      } catch (error) {
        this.presentAlert('Error', 'No se pudo agregar el contacto.');
      }
    }

    // Mostrar notificación de transferencia exitosa
    this.presentAlert('Transferencia Exitosa', `Se ha transferido ${amount} con éxito.`);

    // Limpiar los formularios
    this.resetForm();
  }

  // Método para agregar a la colección Contacts en Firebase
  async addToContactsCollection(accountNumber: string, email: string) {
    try {
      await this.firestore.collection('Contacts').add({
        Account_number: accountNumber,
        Email: email || '',  // Si el email no se proporcionó, guardar un string vacío
        Timestamp: new Date()  // Añadir un timestamp para referencia
      });
    } catch (error) {
      throw new Error('No se pudo agregar el contacto.');
    }
  }

  // Método para limpiar los formularios
  resetForm() {
    this.amount = 0;
    this.accountNumber = '';
    this.email = '';
    this.addToContacts = false;
    this.fromAccount = '';
    this.toAccount = '';
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
