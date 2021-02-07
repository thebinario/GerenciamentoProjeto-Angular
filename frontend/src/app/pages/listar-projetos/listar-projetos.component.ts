import { ProjetoService } from './../../shared/services/projeto.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Projeto } from 'src/app/shared/models/projeto';
import { Router } from '@angular/router';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { GetProjeto } from 'src/app/shared/models/getProjeto.model';

@Component({
  selector: 'app-listar-projetos',
  templateUrl: './listar-projetos.component.html',
  styleUrls: ['./listar-projetos.component.css']
})
export class ListarProjetosComponent implements OnInit {

  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal') deleteModal;
  projetoSelecionado: Projeto;

  simularModalRef: BsModalRef;
  @ViewChild('simulacaoModal') simulacaoModal;
  valorSimulado: Number;

  constructor(
    private projetoService: ProjetoService,
    private router:Router,
    public dialog: MatDialog,
    private modalService: BsModalService,
    ) {}

    ngOnInit() {
      this.getProjetos();
    }
   //dialog
  onDelete(projeto: Projeto){
    this.projetoSelecionado = projeto;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});

  }

  onConfirmDelete(){
    this.projetoService.remove(this.projetoSelecionado.id)
    .subscribe(
      success => this.projetoService.onRefresh()
    );

    this.deleteModalRef.hide();
  }

  onDeclineDelete(){
    this.deleteModalRef.hide();
  }

  //dialog simulacao
  onSimular(projeto: Projeto){
    this.projetoSelecionado = projeto;
    this.simularModalRef = this.modalService.show(this.simulacaoModal, {class: 'modal-sm'});
    this.simular();

  }
  simular(){
    //regra de negicio para simular invetimento
    // 1 => 5%
    // 2 => 10%
    // 3 => 20%
   if(this.projetoSelecionado.risco == 1 ) this.valorSimulado = this.projetoSelecionado.valor * 0.05;
   if(this.projetoSelecionado.risco == 2  ) this.valorSimulado = this.projetoSelecionado.valor * 0.1;
   if(this.projetoSelecionado.risco == 3  ) this.valorSimulado = this.projetoSelecionado.valor * 0.2;
  }
  onCloseSimular(){
    this.simularModalRef.hide();

  }


  // cosumindo api /////////////////////////////////
  projeto = {} as Projeto;
  projetos: Projeto[];

  getProjetModel: GetProjeto[];


  goToPage(pageName: String):void{
    this.router.navigate([pageName])
  }

  nextpage(){
    console.log();
    this.projetoService.nextPage().subscribe((getProjetModel: GetProjeto[]) => {
      this.getProjetModel = getProjetModel;
     // console.log(this.getProjetModel);
    });

  }
  previuspage(){
    this.projetoService.previusPage().subscribe((getProjetModel: GetProjeto[]) => {
      this.getProjetModel = getProjetModel;
      console.log(this.getProjetModel);
    });

  }

  getProjetos() {
    this.projetoService.getProjetoService().subscribe((getProjetModel: GetProjeto[]) => {
      this.getProjetModel = getProjetModel;
      console.log(this.getProjetModel);
    });
  }

  deletarProjeto(projeto: Projeto) {
    this.projetoService.deletarProjeto(projeto).subscribe(() => {
      this.getProjetos();
    });
  }

  editarProjeto(projeto: Projeto) {

    this.projeto = { ...projeto };
    this.lS();
  }

  lS(){
    const data = JSON.stringify(this.projeto);
    localStorage.setItem('projetos', data)
  }



}
