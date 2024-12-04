import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaCadastroUsuarioComponent } from './componentes/tela-cadastro-usuario/tela-cadastro-usuario.component';

const routes: Routes = [
  { path: 'cadastro', component: TelaCadastroUsuarioComponent,},
{ path: '', redirectTo: '/cadastro', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
