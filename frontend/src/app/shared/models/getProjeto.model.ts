export interface GetProjeto{
 data:  [
  id: number,
  nome: string,
  dataInicio: Date,
  dataTermino: Date,
  valor: number,
  risco: number,
  participantes: string,
 ];
 last_page: number;

}
