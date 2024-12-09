import { Injectable } from '@angular/core';
import { IFilme } from '../models/IFilme';
import { ICadastroUsuarioResponse } from '../interfaces-api/src/usuario/IUsuario.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URLPADRAO } from '../models/urls.constant';

@Injectable({ providedIn: 'root' })
export class SharedService {
  constructor(private http: HttpClient) {}
  filme!: IFilme;

  salvarFilme(filme: IFilme) {
    this.filme = filme;
  }

  consultarFilme(): IFilme {
    return this.filme;
  }

  carregarListaFilmes(usuario: ICadastroUsuarioResponse): Observable<IFilme[]> {
    const resposta$: Observable<IFilme[]> = this.http.get<IFilme[]>(
      `${URLPADRAO.urlPadrao}filmes/listar/` + usuario.id
    );
    return resposta$;
  }
}
