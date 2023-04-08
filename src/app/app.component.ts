import { Pessoa } from './filtro/filtro.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProvaSocial-app';

  pessoa: Pessoa[] = [];

  aoAdicionar(pessoa: Pessoa) {
    //console.log(`Adicionado: ` + pessoa);

    this.pessoa.push(pessoa);
  }

}
