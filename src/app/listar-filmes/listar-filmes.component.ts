import { Component, OnInit } from '@angular/core';
import { IFilme } from '../models/IFilme';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { UsuarioServiceService } from '../services/Usuario/usuario-service.service';
import { ICadastroUsuarioResponse } from '../interfaces-api/src/usuario/IUsuario.model';
import { IFilmeResponse } from '../interfaces-api/src/filme/filme.model';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
  styleUrls: ['./listar-filmes.component.scss'],
})
export class ListarFilmesComponent implements OnInit {
  constructor(
    private router: Router,
    private sharedService: SharedService,
    private UsuarioService: UsuarioServiceService
  ) {}
  filmes: IFilmeResponse[] = [];
  usuario: ICadastroUsuarioResponse = {} as ICadastroUsuarioResponse;

  ngOnInit(): void {
    this.usuario = this.UsuarioService.obterUsuarioLogado;
    this.sharedService
      .carregarListaFilmes(this.usuario)
      .subscribe((res: IFilmeResponse[]) => {
        this.filmes = res;
      });
  }

  navegar(filme: IFilmeResponse) {
    this.sharedService.salvarFilme(filme);
    this.router.navigate(['detalhamento']);
  }

  navegarCadastro() {
    this.router.navigate(['cadastro-filme']);
  }
}
