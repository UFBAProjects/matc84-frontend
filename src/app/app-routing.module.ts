import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaCadastroUsuarioComponent } from './tela-cadastro-usuario/tela-cadastro-usuario.component';
import { UsuarioNaoAutenticadoGuard } from './services/Guards/Usuario-nao-autenticado/usuario-nao-autenticado.guard';
import { UsuarioAutenticadoGuard } from './services/Guards/Usuario-autenticado/usuario-autenticado.guard';
import { CardFilmeComponent } from './card-filme/card-filme.component';
import { DetalhamentoFilmeComponent } from './detalhamento-filme/detalhamento-filme.component';
import { ListarFilmesComponent } from './listar-filmes/listar-filmes.component';
import { CadastroFilmeComponent } from './cadastro-filme/cadastro-filme.component';

const routes: Routes = [
  {
    path: 'cadastro',
    component: TelaCadastroUsuarioComponent,
    canActivate: [UsuarioNaoAutenticadoGuard],
  },
  {
    path: 'login',
    component: TelaCadastroUsuarioComponent,
    canActivate: [UsuarioNaoAutenticadoGuard],
  },
  {
    path: 'home',
    component: CardFilmeComponent,
    canActivate: [UsuarioAutenticadoGuard],
  },
  {
    path: 'detalhamento',
    component: DetalhamentoFilmeComponent,
    canActivate: [UsuarioAutenticadoGuard],
  },
  {
    path: 'listagem',
    component: ListarFilmesComponent,
    canActivate: [UsuarioAutenticadoGuard],
  },
  {
    path: 'cadastro-filme',
    component: CadastroFilmeComponent,
    canActivate: [UsuarioAutenticadoGuard],
  },

  { path: '', redirectTo: '/listagem', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
