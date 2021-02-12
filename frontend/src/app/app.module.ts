import { AuthGuard } from './guard/auth.guard';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './pages/login/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CadastrarPageComponent,
    ListarProjetosComponent,
    AtualizarPageComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ModalModule.forRoot(),
    MatIconModule,
    MatChipsModule,

  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
