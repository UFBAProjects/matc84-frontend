import { Component, OnDestroy } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UsuarioServiceService } from '../services/Usuario/usuario-service.service';
import { ICadastroUsuarioResponse, ILoginUsuarioResponse } from '../interfaces-api/src/usuario/IUsuario.model';
import { EmitirEventoService } from '../services/Emitir-evento/emitir-evento.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.scss'],
})
export class BarraSuperiorComponent implements OnDestroy{
usuarioLogado!: ICadastroUsuarioResponse;
private inscricao: Subscription;
  constructor(private router: Router, private usuarioService: UsuarioServiceService, private emitirEvento: EmitirEventoService) {
    this.inscricao = this.emitirEvento.atualizarValor$.subscribe(() => {
      this.usuarioLogado = this.usuarioService.obterUsuarioLogado;
  });}
  tituloPagina = 'Home';

  rotas: rotas[] = [{path: '/cadastro', texto: 'CADASTRO'}, {path: '/login', texto: 'LOGIN'}];

  ngOnInit(): void {
    console.log(this.rotas);
    this.usuarioLogado = this.usuarioService.obterUsuarioLogado;
    console.log(this.usuarioLogado.nome);
  }

  deslogar(): void {
    this.usuarioService.deslogar();
    this.router.navigate(['login']);
    this.usuarioLogado = this.usuarioService.obterUsuarioLogado;
  }

  mudarRota(route: string): void {
    this.router.navigate([route]);
  }
  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
interface rotas {
  path: string;
  texto: string;
}