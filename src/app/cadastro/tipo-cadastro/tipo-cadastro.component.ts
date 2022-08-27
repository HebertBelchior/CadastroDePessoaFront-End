import { CadastroApiService } from './../../cadastro-api.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-cadastro',
  templateUrl: './tipo-cadastro.component.html',
  styleUrls: ['./tipo-cadastro.component.css']
})
export class TipoCadastroComponent implements OnInit {

  cadastroList$!:Observable<any[]>;
  cadastroTiposList$!:Observable<any[]>;
  cadastroTiposList:any=[];

  //Map para mostrar a associação entre as tabelas (FK)
  cadastroTiposMap:Map<number, string> = new Map()

  constructor(private service:CadastroApiService) { }

  ngOnInit(): void {
    this.cadastroList$! = this.service.getCadastroList();
    this.cadastroTiposList$! = this.service.getCadastroTiposList();
    this.refreshCadastroTiposMap();
  }

  //Variável (propriedades)
  modalTitle:string = '';
  activateAddEditCadastroComponent:boolean = false;
  cadastro:any;

  modalAdd(){
    this.cadastro = {
      id:0,
      status:null,
      nome:null,
      sexo:null,
      dataDeNascimento:null,
      telefone:null,
      email:null,
      cadastroTipoId:null
    }
    this.modalTitle = "Novo Cadastro"
    this.activateAddEditCadastroComponent = true;
  }

  modalEdit(item:any){
    this.cadastro = item;
    this.modalTitle = "Edição de tarefa";
    this.activateAddEditCadastroComponent = true;
  }

  delete(item:any){
    if(confirm(`Você tem certeza que quer deletar a tarefa ${item.id}?`)){
      this.service.deleteCadastro(item.id).subscribe(res => {
        var closeModalBtn = document.getElementById('add-edit-modal-close');
        if(closeModalBtn){
          closeModalBtn.click();
        }
  
        var tipoDeleteSuccess = document.getElementById('delete-success-alert');
        if(tipoDeleteSuccess){
          tipoDeleteSuccess.style.display = "block";
        }
        setTimeout(function(){
          if(tipoDeleteSuccess){
            tipoDeleteSuccess.style.display = "none";
          }
        },4000);
      })
    }
  }

  modalClose(){
    this.activateAddEditCadastroComponent = false;
    this.cadastroList$ = this.service.getCadastroList();
  }

  refreshCadastroTiposMap(){
    this.service.getCadastroTiposList().subscribe(data => {
      this.cadastroTiposList = data;

      for(let i = 0; i < data.length; i++){
        this.cadastroTiposMap.set(this.cadastroTiposList[i].id, this.cadastroTiposList[i].cadastroNome)
      }
    })
  }

}
