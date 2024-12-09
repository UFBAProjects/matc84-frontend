import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmitirEventoService {

  constructor() { }

  private atualizarValorr = new Subject<void>();
  atualizarValor$ = this.atualizarValorr.asObservable();

  atualizarValor() {
    this.atualizarValorr.next();
  }
}
