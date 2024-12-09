import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFilme } from '../models/IFilme';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-detalhamento-filme',
  templateUrl: './detalhamento-filme.component.html',
  styleUrls: ['./detalhamento-filme.component.scss'],
})
export class DetalhamentoFilmeComponent implements OnInit {
  filme: IFilme = {} as IFilme;

  constructor(private router: Router, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.filme = this.sharedService.consultarFilme();
  }

  voltar() {
    this.router.navigate(['listagem']);
  }
}
