import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioServiceService } from '../../Usuario/usuario-service.service';
@Injectable({
  providedIn: 'root'
})
export class UsuarioNaoAutenticadoGuard implements CanActivate{
    constructor(
      private usuarioService: UsuarioServiceService,
      private router: Router) { }
    canActivate(){
      if (this.usuarioService.logado) {
        this.router.navigate(['']);
        return false;
      }
      return true;
    }
}