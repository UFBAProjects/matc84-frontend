import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFilme } from '../models/IFilme';
import { SharedService } from '../services/shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioServiceService } from '../services/Usuario/usuario-service.service';
import { lastValueFrom } from 'rxjs';
import {
  IFilmeRequest,
  IFilmeResponse,
} from '../interfaces-api/src/filme/filme.model';

@Component({
  selector: 'app-detalhamento-filme',
  templateUrl: './detalhamento-filme.component.html',
  styleUrls: ['./detalhamento-filme.component.scss'],
})
export class DetalhamentoFilmeComponent implements OnInit {
  filme: IFilmeResponse = {} as IFilmeResponse;

  atualizaForm!: FormGroup;

  constructor(
    private router: Router,
    private sharedService: SharedService,
    private fb: FormBuilder,
    private usuarioService: UsuarioServiceService
  ) {
    this.atualizaForm = this.fb.group({
      titulo: ['', Validators.required],
      genero: ['', Validators.required],
      anoLancamento: ['', Validators.required],
      descricao: ['', Validators.required],
      capa: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.filme = this.sharedService.consultarFilme();
    this.atualizaForm.setValue({
      titulo: this.filme.titulo,
      genero: this.filme.genero,
      anoLancamento: this.filme.anoLancamento,
      descricao: this.filme.descricao,
      capa: this.filme.capa,
    });
  }

  voltar() {
    this.router.navigate(['listagem']);
  }

  aoClicarAtualizar() {
    if (this.atualizaForm.valid) {
      // this.atualizarFilme({
      //   titulo: this.atualizaForm.get('titulo')?.value,
      //   genero: this.atualizaForm.get('genero')?.value,
      //   anoLancamento: Number(this.atualizaForm.get('anoLancamento')?.value),
      //   descricao: this.atualizaForm.get('descricao')?.value,
      //   capa: this.atualizaForm.get('capa')?.value,
      //   user_id: this.usuarioService.obterIdUsuarioLogado as number,
      // })
      //   .then(() => {
      //     alert('Filme cadastrado com sucesso!');
      //     this.atualizaForm.reset();
      //     this.router.navigate(['listagem']);
      //   })
      //   .catch(() => {
      //     alert('Erro ao cadastrar filme!');
      //   });
      this.sharedService
        .atualizarFilme(this.filme.id, {
          titulo: this.atualizaForm.get('titulo')?.value,
          genero: this.atualizaForm.get('genero')?.value,
          anoLancamento: Number(this.atualizaForm.get('anoLancamento')?.value),
          descricao: this.atualizaForm.get('descricao')?.value,
          capa: this.atualizaForm.get('capa')?.value,
        })
        .subscribe((res: IFilmeResponse) => {
          alert('Filme atualizado com sucesso!');
          this.atualizaForm.reset();
          this.router.navigate(['listagem']);
        });
    } else {
      alert('Verificar dados!');
    }
  }

  aoClicarExcluir(filme: IFilmeResponse) {
    this.sharedService.excluirFilme(filme).subscribe(() => {
      alert('Filme Excluído com sucesso!');
      this.router.navigate(['listagem']);
    });
  }
}
