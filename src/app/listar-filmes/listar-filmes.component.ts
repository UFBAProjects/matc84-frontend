import { Component, OnInit } from '@angular/core';
import { IFilme } from '../models/IFilme';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { UsuarioServiceService } from '../services/Usuario/usuario-service.service';
import { ICadastroUsuarioResponse } from '../interfaces-api/src/usuario/IUsuario.model';

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
  filmes: IFilme[] = [];
  usuario: ICadastroUsuarioResponse = {} as ICadastroUsuarioResponse;
  // filmes: IFilme[] = [
  //   {
  //     titulo: 'Moana',
  //     genero: 'Ação',
  //     anoLancamento: 1,
  //     descricao: 'Descrição MOANA',
  //     capa: 'https://lumiere-a.akamaihd.net/v1/images/garland_intl_teaser2_poster_brazil_c487c296.jpeg',
  //     user_id: 1,
  //   },
  //   {
  //     titulo: 'Wicked',
  //     genero: 'Ação',
  //     anoLancamento: 1,
  //     descricao: 'Descrição WICKED',
  //     capa: 'https://ingresso-a.akamaihd.net/prd/img/movie/wicked/7217a2cb-22d2-44ff-a9e2-67f43016ed2b.webp',
  //     user_id: 1,
  //   },
  // ];

  ngOnInit(): void {
    this.usuario = this.UsuarioService.obterUsuarioLogado;
    this.sharedService
      .carregarListaFilmes(this.usuario)
      .subscribe((res: IFilme[]) => {
        this.filmes = res;
      });
  }

  navegar(filme: IFilme) {
    this.sharedService.salvarFilme(filme);
    this.router.navigate(['detalhamento']);
  }
}
