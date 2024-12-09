import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ICadastroUsuarioRequest,
  ICadastroUsuarioResponse,
  ILoginUsuarioRequest,
  ILoginUsuarioResponse,
} from 'src/app/interfaces-api/src/usuario/IUsuario.model';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { URLPADRAO } from 'src/app/models/urls.constant';
@Injectable({
  providedIn: 'root',
})
export class UsuarioServiceService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  cadastrarUsuario(
    usuario: ICadastroUsuarioRequest
  ): Observable<ICadastroUsuarioResponse> {
    return this.httpClient.post<ICadastroUsuarioResponse>(
      `${URLPADRAO.urlPadrao}usuarios`,
      usuario
    );
  }

  loginUsuario(
    usuario: ILoginUsuarioRequest
  ): Observable<ILoginUsuarioResponse> {
    return this.httpClient.post<ILoginUsuarioResponse>(
      `${URLPADRAO.urlPadrao}auth/login`,
      usuario
    );
  }
  deslogar() {
    localStorage.clear();
    this.router.navigate(['login']);
  }
  get obterUsuarioLogado(): ICadastroUsuarioResponse {
    return localStorage.getItem('usuario')
      ? JSON.parse(atob(localStorage.getItem('usuario') as string))
      : null;
  }
  get obterIdUsuarioLogado(): number | null {
    return localStorage.getItem('usuario')
      ? (
          JSON.parse(
            atob(localStorage.getItem('usuario') as string)
          ) as ICadastroUsuarioResponse
        ).id
      : null;
  }
  get obterTokenUsuario(): string {
    return localStorage.getItem('token')
      ? JSON.parse(atob(localStorage.getItem('token') as string))
      : null;
  }
  get logado(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
