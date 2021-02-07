import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/shared/models/projeto';
import { ProjetoService } from 'src/app/shared/services/projeto.service';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atualizar-page',
  templateUrl: './atualizar-page.component.html',
  styleUrls: ['./atualizar-page.component.css']
})
export class AtualizarPageComponent implements OnInit {

  constructor(private projetoService: ProjetoService, private router:Router) {}

  projetoArr: Projeto[] = [JSON.parse(localStorage.getItem('projetos'))];

  projeto = {} as Projeto;
  projetos: Projeto[];


  ngOnInit() {
  }

  goToPage(pageName: String):void{
    this.router.navigate([pageName])
  }

  // defini se um carro será criado ou atualizado
  salvarProjeto(form: NgForm) {
    this.projeto = { ...form.form.value};
    console.log(this.projeto);
    if (this.projeto.id !== undefined) {
      this.projetoService.atualizarProjeto(this.projeto).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.projetoService.salvaProjeto(this.projeto).subscribe(() => {
        this.cleanForm(form);
      });
    }
    this.goToPage('projetos');
  }

  cleanForm(form: NgForm) {
    form.resetForm();
    this.projeto = {} as Projeto;
  }
}
