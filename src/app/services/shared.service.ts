import { Injectable } from '@angular/core';
import { IFilme } from '../models/IFilme';

@Injectable({ providedIn: 'root' })
export class SharedService {
  filme!: IFilme;

  salvarFilme(filme: IFilme) {
    this.filme = filme;
  }

  consultarFilme(): IFilme {
    return this.filme;
  }
}
