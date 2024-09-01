import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.page.html',
  styleUrls: ['./transaction-history.page.scss'],
})
export class TransactionHistoryPage {
  // Define la propiedad transactions como un array de objetos
  transactions = [
    {
      estado: 'Enviada',
      fecha: '15/10/2015',
      cuentaOrigen: 'CRIKATS',
      cuentaDestino: 'PLANILLA',
      monto: '22,000.00 CRC'
    },
    {
      estado: 'Recibida',
      fecha: '16/10/2015',
      cuentaOrigen: 'CRIKATS',
      cuentaDestino: 'AHORROS',
      monto: '10,000.00 CRC'
    },
    // Puedes agregar más transacciones de ejemplo aquí
  ];

  constructor() {}
}
