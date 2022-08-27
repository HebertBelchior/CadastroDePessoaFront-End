import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CadastroApiService } from 'src/app/cadastro-api.service';

@Component({
  selector: 'app-add-edit-cadastro',
  templateUrl: './add-edit-cadastro.component.html',
  styleUrls: ['./add-edit-cadastro.component.css']
})
export class AddEditCadastroComponent implements OnInit {

  cadastroList$!: Observable<any[]>;
  casdastroTipoList$!: Observable<any[]>;
  statusList$!: Observable<any[]>;


  constructor(private service:CadastroApiService) { }

  @Input() cadastro:any;
  id: number = 0;
  status: string = '';
  nome: string = '';
  sexo: string = '';
  dataDeNascimento: string = '';
  telefone: string = '';
  email: string = '';
  cadastroTipoId!: number;

  ngOnInit(): void {
    this.id = this.cadastro.id;
    this.status = this.cadastro.status;
    this.nome = this.cadastro.nome;
    this.sexo = this.cadastro.sexo;
    this.dataDeNascimento = this.cadastro.dataDeNascimento;
    this.telefone = this.cadastro.telefone;
    this.email = this.cadastro.email;
    this.cadastroTipoId = this.cadastro.cadastroTipoId;
    this.statusList$ = this.service.getStatusList();
    this.cadastroList$ = this.service.getCadastroList();
    this.casdastroTipoList$ = this.service.getCadastroTiposList();
  }

  addCadastro(){
    var cadastro = {
      status:this.status,
      nome:this.nome,
      sexo:this.sexo,
      dataDeNascimento:this.dataDeNascimento,
      telefone:this.telefone,
      email:this.email,
      cadastroTipoId:this.cadastroTipoId
    }
    this.service.addCadastro(cadastro).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var tipoAddSuccess = document.getElementById('add-success-alert');
      if(tipoAddSuccess){
        tipoAddSuccess.style.display = 'block';
      }
      setTimeout(function(){
        if(tipoAddSuccess){
          tipoAddSuccess.style.display = 'none';
        }
      },4000);
    })
  }

  updateCadastro(){
    var cadastro = {
      id: this.id,
      status:this.status,
      nome:this.nome,
      sexo:this.sexo,
      dataDeNascimento:this.dataDeNascimento,
      telefone:this.telefone,
      email:this.email,
      cadastroTipoId:this.cadastroTipoId
    }
    var id:number = this.id;
    this.service.updateCadastro(id,cadastro).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var tipoUpdateSuccess = document.getElementById('update-success-alert');
      if(tipoUpdateSuccess){
        tipoUpdateSuccess.style.display = "block";
      }
      setTimeout(function(){
        if(tipoUpdateSuccess){
          tipoUpdateSuccess.style.display = "none";
        }
      },4000);
    })
  }

}
