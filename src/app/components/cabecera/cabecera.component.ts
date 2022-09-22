import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss']
})
export class CabeceraComponent implements OnInit {
  titulo: string = 'ESTUDIO JURÍDICO Damiano Suarez, Diaz & Asociados';
  cuerpo: string = 'Garantizamos a nuestros clientes un trato personalizado, con absoluta lealtad y compromiso.'
  txtLink: string = 'Continua con nuestras noticias para estar al día...';
  constructor() { }

  ngOnInit(): void {
  }

}
