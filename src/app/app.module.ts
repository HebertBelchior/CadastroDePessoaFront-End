import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TipoCadastroComponent } from './cadastro/tipo-cadastro/tipo-cadastro.component';
import { AddEditCadastroComponent } from './cadastro/add-edit-cadastro/add-edit-cadastro.component';
import { CadastroApiService } from './cadastro-api.service';
@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    TipoCadastroComponent,
    AddEditCadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [CadastroApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
