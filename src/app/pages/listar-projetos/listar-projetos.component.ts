import { ProjetoService } from './../../shared/services/projeto.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Projeto } from 'src/app/shared/models/projeto';
import { Router } from '@angular/router';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

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

  //dialog
  onDelete(projeto: Projeto){
    this.projetoSelecionado = projeto;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {class: 'modal-sm'});

  }

  onConfirmDelete(){
    this.projetoService.remove(this.projetoSelecionado.id)
    .subscribe(
      success => console.log('success')
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


  ngOnInit() {
    this.getProjetos();
  }

  goToPage(pageName: String):void{
    this.router.navigate([pageName])
  }

  getProjetos() {
    this.projetoService.getProjetoService().subscribe((projetos: Projeto[]) => {
      this.projetos = projetos;
      //console.log(projetos);
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
