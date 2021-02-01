import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Projeto } from '../models/projeto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {

  url = 'http://127.0.0.1:8000/api/projetos'; // api

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }
  proejto = {} as Projeto;
  projetos: Projeto[];


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getProjetoService(): Observable<Projeto[]> {
    return this.httpClient.get<Projeto[]>(this.url)
  }
  salvaProjeto(projeto: Projeto): Observable<Projeto> {
    return this.httpClient.post<Projeto>(this.url, JSON.stringify(projeto), this.httpOptions)

  }
  deletarProjeto(projeto: Projeto) {
    return this.httpClient.delete<Projeto>(this.url + '/' + projeto.id, this.httpOptions)

  }

  atualizarProjeto(projeto: Projeto): Observable<Projeto> {
    return this.httpClient.put<Projeto>(this.url + '/' + projeto.id, JSON.stringify(projeto), this.httpOptions)

  }
}
