import { Codigo } from './../core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.component.html',
  styleUrls: ['./codigo.component.css']
})
export class CodigoComponent implements OnInit {
  texto: string = Codigo;
  constructor() { }

  ngOnInit(): void {
  }

}
