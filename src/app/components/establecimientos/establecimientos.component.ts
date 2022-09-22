import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-establecimientos',
  templateUrl: './establecimientos.component.html',
  styleUrls: ['./establecimientos.component.scss']
})
export class EstablecimientosComponent implements OnInit {
  titulo: string = 'Establecimientos';
  tituloM1: string = 'Canning';
  tituloM2: string = 'Gregorio de Laferrere';

  constructor() { }

  ngOnInit(): void {
  }

}
