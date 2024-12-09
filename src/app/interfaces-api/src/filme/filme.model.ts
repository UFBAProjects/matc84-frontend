export interface IFilmeRequest {
  titulo: string;
  genero: string;
  anoLancamento: number;
  descricao: string;
  capa: string;
  user_id: number;
}

export interface IAtualizaFilmeRequest {
  titulo: string;
  genero: string;
  anoLancamento: number;
  descricao: string;
  capa: string;
}

export interface IFilmeResponse {
  titulo: string;
  genero: string;
  anoLancamento: number;
  descricao: string;
  capa: string;
  user_id: number;
  id: number;
}
