import { ProjetoService } from './../../shared/services/projeto.service';
import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/shared/models/projeto';

@Component({
  selector: 'app-listar-projetos',
  templateUrl: './listar-projetos.component.html',
  styleUrls: ['./listar-projetos.component.css']
})
export class ListarProjetosComponent implements OnInit {

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

}
