import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.page.html',
  styleUrls: ['./transaction-history.page.scss'],
})
export class TransactionHistoryPage {
  transactions = [
    {
      descripcion: 'Transferencia Recibida Moises Caicedo',
      estado: 'Completada',
      fecha: '23/08/2024',
      cuentaOrigen: 'Cuenta #1',
      cuentaDestino: 'Cuenta #2',
      monto: 2000
    },
    {
      descripcion: 'Pago agua potable',
      estado: 'Pendiente',
      fecha: '23/08/2024',
      cuentaOrigen: 'Cuenta #1',
      cuentaDestino: 'Proveedor Agua',
      monto: -20
    },
    {
      descripcion: 'Cobro Plan Claro',
      estado: 'Completada',
      fecha: '23/08/2024',
      cuentaOrigen: 'Cuenta #1',
      cuentaDestino: 'Claro',
      monto: -10.99
    },
    {
      descripcion: 'Impuestos',
      estado: 'Completada',
      fecha: '23/08/2024',
      cuentaOrigen: 'Cuenta #1',
      cuentaDestino: 'Gobierno',
      monto: -1.99
    },
  ];
}
