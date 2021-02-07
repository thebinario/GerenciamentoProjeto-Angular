import { ListarProjetosComponent } from './pages/listar-projetos/listar-projetos.component';
import { AtualizarPageComponent } from './pages/atualizar-page/atualizar-page.component';
import { CadastrarPageComponent } from './pages/cadastrar-page/cadastrar-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'cadastrar', component: CadastrarPageComponent},
  {path: 'atualizar', component: AtualizarPageComponent},
  {path: 'projetos', component: ListarProjetosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
