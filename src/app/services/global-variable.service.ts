import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalVariableService {
  private _envUserId: any = localStorage.getItem('envUser_Id') || null;

  get envUserId(): any {
    return this._envUserId;
  }

  set envUserId(value: any) {
    this._envUserId = value;
    localStorage.setItem('envUser_Id', value);
    // para que persista mi linda variable uwu
  }
}