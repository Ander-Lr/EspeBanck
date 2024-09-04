import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';  // Importar AlertController
import { AngularFirestore } from '@angular/fire/compat/firestore';  // Importar AngularFirestore

interface UserData {
  Password: string;
}

@Component({
  selector: 'app-account-editing',
  templateUrl: './account-editing.component.html',
  styleUrls: ['./account-editing.component.scss'],
})
export class AccountEditingComponent {
  editableFields: { [key: string]: boolean } = {
    nombre: false,
    apellido: false,
    cedula: false,
    celular: false,
    username: false,
    password: false,
    email: false,
    ciudad: false,
  };

  constructor(
    private router: Router,
    private alertController: AlertController,  // Inyectar AlertController
    private firestore: AngularFirestore  // Inyectar AngularFirestore
  ) {}

  // Método para cerrar sesión y redirigir a la página de login
  logout() {
    this.router.navigate(['/login']);
  }

  // Método para habilitar o deshabilitar la edición de un campo
  toggleEdit(field: string) {
    this.editableFields[field] = !this.editableFields[field];
  }

  // Método para deshabilitar la cuenta
  async disableAccount() {
    const alert = await this.alertController.create({
      header: 'Deshabilitar Cuenta',
      message: 'Por favor, ingrese su contraseña para continuar',
      inputs: [
        {
          name: 'password',
          type: 'password',
          placeholder: 'Contraseña',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Confirmar',
          handler: async (data) => {
            if (data.password) {
              const userId = 'id-del-usuario'; // Reemplaza con la lógica para obtener el ID del usuario autenticado

              try {
                const docRef = this.firestore.collection('Users').doc(userId);
                const doc = await docRef.get().toPromise();

                if (doc && doc.exists) {
                  const userData = doc.data() as UserData;  // Usa la interfaz UserData para tipar los datos
                  const storedPassword = userData.Password;

                  if (storedPassword === data.password) {
                    // Redirigir a la página de login si la contraseña coincide
                    this.router.navigate(['/login']);
                  } else {
                    // Mostrar un mensaje de error si la contraseña no coincide
                    this.presentAlert('Error', 'La contraseña es incorrecta.');
                  }
                } else {
                  this.presentAlert('Error', 'No se encontró el usuario.');
                }
              } catch (error) {
                this.presentAlert('Error', 'Ocurrió un error al verificar la contraseña.');
              }
            } else {
              this.presentAlert('Error', 'Debe ingresar una contraseña.');
            }
          },
        },
      ],
    });

    await alert.present();
  }

  // Método para mostrar alertas
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
