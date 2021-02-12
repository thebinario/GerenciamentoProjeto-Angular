import { LoginComponent } from './pages/login/login.component';
import { ListarProjetosComponent } from './pages/listar-projetos/listar-projetos.component';
import { AtualizarPageComponent } from './pages/atualizar-page/atualizar-page.component';
import { CadastrarPageComponent } from './pages/cadastrar-page/cadastrar-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'home',
    component: HomePageComponent,
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'cadastrar',
    component: CadastrarPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'atualizar',
    component: AtualizarPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projetos',
    component: ListarProjetosComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
