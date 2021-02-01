import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CadastrarPageComponent } from './pages/cadastrar-page/cadastrar-page.component';
import { ListarProjetosComponent } from './pages/listar-projetos/listar-projetos.component';
import { AtualizarPageComponent } from './pages/atualizar-page/atualizar-page.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CadastrarPageComponent,
    ListarProjetosComponent,
    AtualizarPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
