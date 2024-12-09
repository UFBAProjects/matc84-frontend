import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFilmeRequest, IFilmeResponse } from 'src/app/interfaces-api/src/filme/filme.model';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private httpClient: HttpClient) { }

  cadastarFilme(filme: IFilmeRequest): Observable<IFilmeResponse> {
    return this.httpClient.post<IFilmeResponse>('http://localhost:8080/filmes/cadastrar', filme);
  }
}
