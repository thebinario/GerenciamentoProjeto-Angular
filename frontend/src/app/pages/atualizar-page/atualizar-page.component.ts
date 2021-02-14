import { Component, OnInit } from '@angular/core';
import { Projeto } from 'src/app/shared/models/projeto';
import { ProjetoService } from 'src/app/shared/services/projeto.service';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component} from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

export interface Fruit {
  name: string;
}

@Component({
  selector: 'app-atualizar-page',
  templateUrl: './atualizar-page.component.html',
  styleUrls: ['./atualizar-page.component.css']
})
export class AtualizarPageComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  fruits: Fruit[] = [
    {name: 'Lemon'},
    {name: 'Lime'},
    {name: 'Apple'},
  ];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

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
