import { Component } from '@angular/core';

@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss']
})
export class WhatsappComponent {
  tipo: string = 'WhatsApp';
  titulo: string = 'Háblanos ahora mismo!';
  telefono: string = '+54 9 11-5572-8063';
  cuerpo: string = 'Un vídeo o imagen vale más que mil palabras. Una forma más eficaz y moderna de comunicarse con potenciales clientes.';
  txtBtn: string = 'Hablar ahora';

  constructor() { }

}
