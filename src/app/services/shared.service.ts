import { Injectable } from '@angular/core';
import { IFilme } from '../models/IFilme';
import { ICadastroUsuarioResponse } from '../interfaces-api/src/usuario/IUsuario.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URLPADRAO } from '../models/urls.constant';
import {
  IAtualizaFilmeRequest,
  IFilmeRequest,
  IFilmeResponse,
} from '../interfaces-api/src/filme/filme.model';

@Injectable({ providedIn: 'root' })
export class SharedService {
  constructor(private http: HttpClient) {}
  filme!: IFilmeResponse;

  salvarFilme(filme: IFilmeResponse) {
    this.filme = filme;
  }

  consultarFilme(): IFilmeResponse {
    return this.filme;
  }

  carregarListaFilmes(
    usuario: ICadastroUsuarioResponse
  ): Observable<IFilmeResponse[]> {
    const resposta$: Observable<IFilmeResponse[]> = this.http.get<
      IFilmeResponse[]
    >(`${URLPADRAO.urlPadrao}filmes/listar/` + usuario.id);
    return resposta$;
  }

  atualizarFilme(
    id: number,
    filme: IAtualizaFilmeRequest
  ): Observable<IFilmeResponse> {
    const resposta$: Observable<IFilmeResponse> = this.http.put<IFilmeResponse>(
      `${URLPADRAO.urlPadrao}filmes/atualizar/` + id,
      filme
    );

    return resposta$;
  }

  excluirFilme(filme: IFilmeResponse): Observable<void> {
    const resposta$: Observable<void> = this.http.delete<void>(
      `${URLPADRAO.urlPadrao}filmes/deletar/` + filme.id
    );

    return resposta$;
  }
}
