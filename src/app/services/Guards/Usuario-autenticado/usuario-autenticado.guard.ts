import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioServiceService } from '../../Usuario/usuario-service.service';
@Injectable({
  providedIn: 'root'
})
export class UsuarioAutenticadoGuard implements CanActivate{
    constructor(
      private usuarioService: UsuarioServiceService,
      private router: Router) { }
    canActivate(){
      if (this.usuarioService.logado) {
        return true;
      }
      this.router.navigate(['login']);
      return false;
    }
}