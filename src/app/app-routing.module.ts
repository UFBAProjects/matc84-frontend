import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaCadastroUsuarioComponent } from './tela-cadastro-usuario/tela-cadastro-usuario.component';
import { ListarFilmesComponent } from './listar-filmes/listar-filmes.component';
import { DetalhamentoFilmeComponent } from './detalhamento-filme/detalhamento-filme.component';

const routes: Routes = [
  { path: 'cadastro', component: TelaCadastroUsuarioComponent },
  { path: 'login', component: TelaCadastroUsuarioComponent },
  { path: 'detalhamento', component: DetalhamentoFilmeComponent },
  { path: 'listagem', component: ListarFilmesComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
