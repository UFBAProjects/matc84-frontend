import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TelaCadastroUsuarioComponent } from './tela-cadastro-usuario/tela-cadastro-usuario.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { BotaoComponent } from './barra-superior/botao/botao.component';
import { CardFilmeComponent } from './card-filme/card-filme.component';
import { DetalheFilmeComponent } from './detalhe-filme/detalhe-filme.component';


@NgModule({
  declarations: [AppComponent, TelaCadastroUsuarioComponent, BarraSuperiorComponent, BotaoComponent, CardFilmeComponent, DetalheFilmeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
