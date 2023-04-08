import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.css']
})
export class ComentarioComponent implements OnInit {

  @Input() pessoa: any;

  constructor() {
  }

  ngOnInit(): void {
  }

  incrementarComentario(id: number): number{
    return ++this.pessoa[id].curtidas;
  };

}
