import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { ThfNotificationService } from '@totvs/thf-ui';
import { ThfSelectOption } from '@totvs/thf-ui/components/thf-field';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit, OnDestroy {

  public customer: any = {};
  private readonly url: string = 'https://sample-customers-api.herokuapp.com/api/thf-samples/v1/people';
  private customerSub: Subscription;

  public readonly genreOptions: Array<ThfSelectOption> = [
    { label: 'Feminino', value: 'Female' },
    { label: 'Masculino', value: 'Male' }
  ];

  constructor(
    private thfNotification: ThfNotificationService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() { }

  ngOnDestroy() {
    if (this.customerSub) {
      this.customerSub.unsubscribe();
    }
  }

  // o método cancela
  cancel() {
    this.router.navigateByUrl('/customers');
  }

  // O método save já cria um botão "SALVAR" no canto superior direito
  save() {
    // fazendo cópia de customer da classe para manipular os dados corretamente para o status
    const customer = {...this.customer};
    customer.status = customer.status ? 'Active' : 'Inactive';

    this.customerSub = this.http.post(this.url, customer).subscribe(
      () => {
        // Exbibe uma notificação de sucesso
        this.thfNotification.success('Cliente cadastrado com sucesso');
        // Redireciona para a listagem de clientes
        this.router.navigateByUrl('/customers');
        // .then( () => console.log('FOI PARA "/customers"'))
        // .catch( err => console.log('NÂO FOI, DEU ERRO', err) );
      },
      err => console.log('NÂO FUNCIONOU, ERRO', err)
    );
  }

}
