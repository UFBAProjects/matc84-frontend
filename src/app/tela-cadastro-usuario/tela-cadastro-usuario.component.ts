import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-tela-cadastro-usuario',
  templateUrl: './tela-cadastro-usuario.component.html',
  styleUrls: ['./tela-cadastro-usuario.component.scss'],
})
export class TelaCadastroUsuarioComponent implements OnInit {
  pathAtual = '';
  ehLogin = true;
  routerSubscription!: Subscription;
  constructor(private router: Router, private fb: FormBuilder,) { }
  value: string | undefined;
  loginForm!: FormGroup;
ngOnInit(): void {
  this.loginForm = this.fb.group({
    nome: ['', Validators.required], // O campo "name" será condicional
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
    //this.ehLogin = this.cadastroOuLogin();
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
  // Cancela a inscrição no evento de rota
  if (this.routerSubscription) {
    this.routerSubscription.unsubscribe();
  }
}
  login() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      console.log(formData);
    }
  }
}
