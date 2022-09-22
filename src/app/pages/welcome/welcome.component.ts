import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  navBar: string = 'Bienvenidos';
  btnNavBar: string = 'Contacto';
  tituloContacto1:string = 'Teléfonos';
  tituloContacto2:string = '6079-5324 / 11-5572-8063';

  titulo: string = 'Damiano Suarez - Diaz & Asoc.';
  subTitulo: string = 'En Damiano Suarez - Diaz & Asociados tenemos el compromiso de brindar asesoramiento personalizado, transparencia y profesionalidad a nuestros clientes en nuestras áreas de practica. Conozca nuestros servicios y contáctenos a través de esta misma pagina. Accede ya mismo a una consulta virtual por Correo o Whatsapp.'
  irHome: string = 'Ingresar';

  boxTitulo1: string = 'Valores';
  boxData1: string = 'Trabajamos con valores morales sólidos pues son nuestra mejor carta de presentación.';

  boxTitulo2: string = 'Honestidad';
  boxData2: string = 'Tenemos la honestidad como estandarte pues la meta depende de la confianza del cliente.';

  boxTitulo3: string = 'Compromiso';
  boxData3: string = 'Prestamos servicios y asesoría permanente orientados obtener objetivos concretos.';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  IrHome(){
    this.router.navigate(['home']);
  }
}
