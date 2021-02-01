import { ProjetoService } from './../../shared/services/projeto.service';
import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/shared/models/projeto';
import { Router } from '@angular/router';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { AlertConfirmDeleteComponent } from 'src/app/dialogs/alert-confirm-delete/alert-confirm-delete.component';

@Component({
  selector: 'app-listar-projetos',
  templateUrl: './listar-projetos.component.html',
  styleUrls: ['./listar-projetos.component.css']
})
export class ListarProjetosComponent implements OnInit {

  constructor(
    private projetoService: ProjetoService,
    private router:Router,
    public dialog: MatDialog) {}

    //dialog
    openDialog(projeto: Projeto): void {
      const dialogRef = this.dialog.open(AlertConfirmDeleteComponent, {
        width: '250px',
      });

      /* this.projetoService.deletarProjeto(projeto).subscribe(() => {
        this.getProjetos();
      }); */

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');

      });
    }





  // cosumindo api
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
