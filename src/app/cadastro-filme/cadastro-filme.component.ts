import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FilmeService } from '../services/Filme/filme.service';
import { IFilmeRequest, IFilmeResponse } from '../interfaces-api/src/filme/filme.model';
import { lastValueFrom } from 'rxjs';
import { UsuarioServiceService } from '../services/Usuario/usuario-service.service';

@Component({
  selector: 'app-cadastro-filme',
  templateUrl: './cadastro-filme.component.html',
  styleUrls: ['./cadastro-filme.component.scss']
})
export class CadastroFilmeComponent implements OnInit {
loginForm!: FormGroup;
constructor(private router: Router, private fb: FormBuilder, private filmeService: FilmeService, private usuarioService: UsuarioServiceService) { }

ngOnInit(): void {
  this.loginForm = this.fb.group({
    titulo: ['', Validators.required],
    genero: ['', Validators.required],
    anoLancamento: ['', Validators.required],
    descricao: ['', Validators.required],
    capa: ['', Validators.required]
  });
}


aoClicarCadastrar() {
  if (this.loginForm.valid) {
    this.cadastrarFilme({
      titulo: this.loginForm.get('titulo')?.value,
      genero: this.loginForm.get('genero')?.value,
      anoLancamento: this.loginForm.get('anoLancamento')?.value,
      descricao: this.loginForm.get('descricao')?.value,
      capa: this.loginForm.get('capa')?.value,
      user_id: this.usuarioService.obterIdUsuarioLogado as number
    }).then(() => {
      alert('Filme cadastrado com sucesso!');
      this.loginForm.reset();
    }).catch(() => {
      alert('Erro ao cadastrar filme!');
    });
  } else {
    alert('Verificar dados!');
  }
}

async cadastrarFilme(filme: IFilmeRequest): Promise<IFilmeResponse> {
  return await lastValueFrom(this.filmeService.cadastarFilme(filme));
}
}
