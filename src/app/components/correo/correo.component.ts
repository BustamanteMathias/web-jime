import { Component } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent {

  titulo: string = 'Envíanos tu consulta';
  tipo: string = 'Correo';
  subTituloMuted: string = 'estudiodamianosuarezdiazyasoc@gmail.com';
  cuerpo: string = 'Complete el siguiente formulario para hacernos una cosulta via Mail, y la contestaremos a la mayor brevedad posible.';

  constructor() { }

}
