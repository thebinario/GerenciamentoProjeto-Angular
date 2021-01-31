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

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  // Obtem todos os carros
  getProjetoService(): Observable<Projeto[]> {
    return this.httpClient.get<Projeto[]>(this.url)
  }
}
