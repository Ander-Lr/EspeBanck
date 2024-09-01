import { Component } from '@angular/core';

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

  constructor() {}
}


