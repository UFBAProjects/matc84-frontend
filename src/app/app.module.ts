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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CadastroFilmeComponent } from './cadastro-filme/cadastro-filme.component';
import { TokenInterceptor } from './services/interceptor/token.interceptor';

@NgModule({
  declarations: [AppComponent, TelaCadastroUsuarioComponent, BarraSuperiorComponent, BotaoComponent, CardFilmeComponent, CadastroFilmeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
