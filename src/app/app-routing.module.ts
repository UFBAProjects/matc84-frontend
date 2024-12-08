import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaCadastroUsuarioComponent } from './tela-cadastro-usuario/tela-cadastro-usuario.component';
import { CardFilmeComponent } from './card-filme/card-filme.component';
import { DetalheFilmeComponent } from './detalhe-filme/detalhe-filme.component';

const routes: Routes = [
  {path: 'filmes', component: CardFilmeComponent},
  {path: 'detalheFilme', component: DetalheFilmeComponent},
  {path: 'cadastro', component: TelaCadastroUsuarioComponent },
  {path: '', redirectTo: '/cadastro', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
