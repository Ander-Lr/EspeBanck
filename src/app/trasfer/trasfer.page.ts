import { Component } from '@angular/core';

@Component({
  selector: 'app-trasfer',
  templateUrl: './trasfer.page.html',
  styleUrls: ['./trasfer.page.scss'],
})
export class TrasferPage {
  amount: number = 0; // Initialized
  accountNumber: string = ''; // Initialized
  email: string = ''; // Initialized
  addToContacts: boolean = false; // Initialized
  fromAccount: string = ''; // Added and Initialized
  toAccount: string = ''; // Added and Initialized

  accounts = [
    { name: 'Cuenta #1', balance: 1000 },
    { name: 'Cuenta #2', balance: 0 },
    { name: 'Cuenta #3', balance: 100 }
  ];

  transfer(amount: number, fromAccount: string, toAccount: string) {
    
  }
}





