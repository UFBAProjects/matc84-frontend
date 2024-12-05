import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-tela-cadastro-usuario',
  templateUrl: './tela-cadastro-usuario.component.html',
  styleUrls: ['./tela-cadastro-usuario.component.scss'],
})
export class TelaCadastroUsuarioComponent {
  value: string | undefined;
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  login() {
    // CALL API with username and password
    if (this.loginForm.invalid) return;

    alert('Calling backend to login');
  }
}
