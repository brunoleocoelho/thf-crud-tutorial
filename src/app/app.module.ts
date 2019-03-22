import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/* Este projeto é um tutorial de 7 passos de como desenvolver com o THF
  usando os componentes thf, como formulários, inputs, botões.

  1. Criando um CRUD com THF (1/7)- Iniciando o projeto
    https://medium.com/totvsdevelopers/criando-um-crud-com-thf-iniciando-o-projeto-2bb79138eea6

  2. Criando um CRUD com THF (2/7) - Listando nossos clientes
    https://medium.com/totvsdevelopers/criando-um-crud-com-thf-listando-nossos-clientes-cfd80b9d8b00

  3. Criando um CRUD com THF (3/7) - Pesquisando pelos nossos clientes
    https://medium.com/totvsdevelopers/criando-um-crud-com-thf-pesquisando-pelos-nossos-clientes-75d3d2ecbcc

  4. Criando um CRUD com THF (4/7) - Criando um novo cliente
    https://medium.com/totvsdevelopers/criando-um-crud-com-thf-criando-um-novo-cliente-c0c519502e92

*/
