import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Projeto } from 'src/app/shared/models/projeto';
import { ProjetoService } from 'src/app/shared/services/projeto.service';

@Component({
  selector: 'app-cadastrar-page',
  templateUrl: './cadastrar-page.component.html',
  styleUrls: ['./cadastrar-page.component.css']
})
export class CadastrarPageComponent implements OnInit {

  constructor(private projetoService: ProjetoService) {}

  projeto = {} as Projeto;
  projetos: Projeto[];


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
    if (this.projeto.id !== undefined) {
      this.projetoService.atualizarProjeto(this.projeto).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.projetoService.salvaProjeto(this.projeto).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  cleanForm(form: NgForm) {
    this.getProjetos();
    form.resetForm();
    this.projeto = {} as Projeto;
  }
}
