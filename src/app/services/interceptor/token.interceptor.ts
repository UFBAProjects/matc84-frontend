import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UsuarioServiceService } from '../Usuario/usuario-service.service';
import { URLPADRAO } from 'src/app/models/urls.constant';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private usuarioService: UsuarioServiceService) {}

  url = URLPADRAO.urlPadrao;

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.usuarioService.obterTokenUsuario;
    console.log('TOKEN', token);
    const requestUrl: Array<any> = request.url.split('/');
    const apiUrl: Array<any> = this.url.split('/');

    if (token && requestUrl[2] === apiUrl[2]) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          token: `${token}`,
        },
      });
    }

    return next.handle(request).pipe(
      catchError((error: any) => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          this.usuarioService.deslogar();
        }
        // Sempre retornar um Observable, mesmo no caso de 401
        return throwError(() => error); // Use uma função para evitar depreciações
      })
    );
  }
}
