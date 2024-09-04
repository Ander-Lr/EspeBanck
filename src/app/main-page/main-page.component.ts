import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

interface AccountData {
  Balance: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  balance: number = 0;
  contacts = [
    { name: 'Ada Lovelace', image: 'assets/Logo-EspeBank.png' },
    { name: 'Anderson Lara', image: 'assets/Logo-EspeBank.png' },
  ];

  constructor(
    private firestore: AngularFirestore,
    private router: Router
  ) {}

  ngOnInit() {
    this.getBalance();
  }

  getBalance() {
    this.firestore.collection('Counts', ref => ref.limit(1)).get().subscribe((querySnapshot) => {
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        const data = doc.data() as AccountData;
        console.log('Datos obtenidos:', data);
        this.balance = data.Balance || 0;
        console.log('Saldo actualizado:', this.balance);
      } else {
        console.error('No se encontró ningún documento en la colección Counts.');
      }
    }, error => {
      console.error("Error al obtener el saldo:", error);
    });
  }
  

  navigateToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }

  transfer(contact: any) {
    console.log('Transferir a:', contact.name);
  }
}
