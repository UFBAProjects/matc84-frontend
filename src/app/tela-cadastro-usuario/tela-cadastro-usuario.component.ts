import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { lastValueFrom, Subscription } from 'rxjs';
import { UsuarioServiceService } from '../services/Usuario/usuario-service.service';
import { ICadastroUsuarioRequest, ICadastroUsuarioResponse, ILoginUsuarioRequest, ILoginUsuarioResponse } from '../interfaces-api/src/usuario/IUsuario.model';
import { EmitirEventoService } from '../services/Emitir-evento/emitir-evento.service';
@Component({
  selector: 'app-tela-cadastro-usuario',
  templateUrl: './tela-cadastro-usuario.component.html',
  styleUrls: ['./tela-cadastro-usuario.component.scss'],
})
export class TelaCadastroUsuarioComponent implements OnInit {
  pathAtual = '';
  ehLogin = true;
  routerSubscription!: Subscription;
  constructor(private router: Router, private fb: FormBuilder, private usuarioService: UsuarioServiceService, private emitirEvento: EmitirEventoService) {

  }
  value: string | undefined;
  loginForm!: FormGroup;
ngOnInit(): void {
  this.loginForm = this.fb.group({
    nome: ['', Validators.required],
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
  this.routerSubscription = this.router.events.subscribe((event) => {
    if (event instanceof NavigationEnd) {
      this.cadastroOuLogin(event.url);
    }
  });
  this.cadastroOuLogin(this.router.url);
    this.pathAtual = this.router.url;
}
cadastroOuLogin(url: string) {
  this.ehLogin = url.includes('/cadastro');

    if (this.ehLogin) {
      this.loginForm.get('nome')?.setValidators(Validators.required);
      this.loginForm.get('nome')?.updateValueAndValidity();
    } else {
      this.loginForm.get('nome')?.clearValidators();
      this.loginForm.get('nome')?.updateValueAndValidity();
    }
}

ngOnDestroy(): void {
  if (this.routerSubscription) {
    this.routerSubscription.unsubscribe();
  }
}
  login() {
    if (this.loginForm.valid) {
      if(this.ehLogin) {
        this
        .cadastrarUsuario({nome: this.loginForm.get('nome')?.value, email: this.loginForm.get('username')?.value, senha: this.loginForm.get('password')?.value})
        .then(() => {
          alert('Usuário cadastrado com sucesso!');
          this.loginForm.reset();
          this.router.navigate(['/login']);
        }).catch(() => {
          alert('Erro ao cadastrar usuário!');
        }
        );
      } else {
        this
        .loginDeUsuario({email: this.loginForm.get('username')?.value, senha: this.loginForm.get('password')?.value})
        .then((response) => {
          localStorage.setItem('token', btoa(JSON.stringify(response.token)));
          localStorage.setItem('usuario', btoa(JSON.stringify(response.usuario)));
          this.emitirEvento.atualizarValor();
          this.router.navigate(['/home']);
        }).catch(() => {
          alert('Usuário ou senha inválidos!');
        });
      }
    }
  }

  cadastrarUsuario(usuario: ICadastroUsuarioRequest): Promise<ICadastroUsuarioResponse> { 
    return lastValueFrom(this.usuarioService.cadastrarUsuario(usuario));
  }

  loginDeUsuario(usuario: ILoginUsuarioRequest): Promise<ILoginUsuarioResponse> {
    return lastValueFrom(this.usuarioService.loginUsuario(usuario));
  }
}
