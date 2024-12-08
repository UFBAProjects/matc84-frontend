import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaCadastroUsuarioComponent } from './view/tela-cadastro-usuario/tela-cadastro-usuario.component';
import { ListagemFilmesComponent } from './view/listagem-filmes/listagem-filmes.component';

const routes: Routes = [
  { path: 'listagem', component: ListagemFilmesComponent },
  { path: 'cadastro', component: TelaCadastroUsuarioComponent },
  { path: '', redirectTo: '/cadastro', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
