import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroApiService {

  readonly cadastroAPIUrl = "https://localhost:7032/api";

  constructor(private http:HttpClient) { }

  //Cadastro
  getCadastroList():Observable<any[]>{
    return this.http.get<any>(this.cadastroAPIUrl + '/Cadastros');
  }

  addCadastro(data:any){
    return this.http.post(this.cadastroAPIUrl + '/Cadastros', data);
  }

  updateCadastro(id:number|string, data:any){
    return this.http.put(this.cadastroAPIUrl + `/Cadastros/${id}`, data);
  }

  deleteCadastro(id:number|string){
    return this.http.delete(this.cadastroAPIUrl + `/Cadastros/${id}`)
  }

  //Cadastro Tipos
  getCadastroTiposList():Observable<any[]>{
    return this.http.get<any>(this.cadastroAPIUrl + '/CadastroTipos');
  }

  addCadastroTipos(data:any){
    return this.http.post(this.cadastroAPIUrl + '/CadastroTipos', data);
  }

  updateCadastroTipos(id:number|string, data:any){
    return this.http.put(this.cadastroAPIUrl + `/CadastroTipos/${id}`, data);
  }

  deleteCadastroTipos(id:number|string){
    return this.http.delete(this.cadastroAPIUrl + `/CadastrTipos/${id}`)
  }

  //Status
  getStatusList():Observable<any[]>{
    return this.http.get<any>(this.cadastroAPIUrl + '/Status');
  }

  addStatus(data:any){
    return this.http.post(this.cadastroAPIUrl + '/Status', data);
  }

  updateStatus(id:number|string, data:any){
    return this.http.put(this.cadastroAPIUrl + `/Status/${id}`, data);
  }

  deleteStatus(id:number|string){
    return this.http.delete(this.cadastroAPIUrl + `/Status/${id}`)
  }
}
