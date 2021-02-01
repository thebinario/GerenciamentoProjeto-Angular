import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Projeto } from 'src/app/shared/models/projeto';
import { ProjetoService } from 'src/app/shared/services/projeto.service';

@Component({
  selector: 'app-cadastrar-page',
  templateUrl: './cadastrar-page.component.html',
  styleUrls: ['./cadastrar-page.component.css']
})
export class CadastrarPageComponent implements OnInit {

  constructor(private projetoService: ProjetoService, private router:Router) {}

  projeto = {} as Projeto;
  projetos: Projeto[];

  goToPage(pageName: String):void{
    this.router.navigate([pageName])
  }

  ngOnInit() {
    this.getProjetos();
  }

  getProjetos() {
    this.projetoService.getProjetoService().subscribe((projetos: Projeto[]) => {
      this.projetos = projetos;
      //console.log(projetos);
    });
  }

  // defini se um carro será criado ou atualizado
  salvarProjeto(form: NgForm) {
    this.projeto = { ...form.form.value};
    console.log(this.projeto);

    this.projetoService.salvaProjeto(this.projeto).subscribe(() => {
      this.cleanForm(form);
    });
    this.goToPage('projetos');
  }

  cleanForm(form: NgForm) {
    this.getProjetos();
    form.resetForm();
    this.projeto = {} as Projeto;
  }
}
