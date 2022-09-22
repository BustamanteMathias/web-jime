import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CKEditorModule } from 'ng2-ckeditor';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SpinnerHomeComponent } from './components/spinner-home/spinner-home.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { FormGmailComponent } from './components/form-gmail/form-gmail.component';
import { TestComponent } from './components/test/test.component';
import { Mapa1Component } from './components/mapa1/mapa1.component';
import { Mapa2Component } from './components/mapa2/mapa2.component';
import { EstablecimientosComponent } from './components/establecimientos/establecimientos.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { ListadoArticulosComponent } from './components/listado-articulos/listado-articulos.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CorreoComponent } from './components/correo/correo.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MenuComponent,
    AdminComponent,
    SpinnerHomeComponent,
    WelcomeComponent,
    FormGmailComponent,
    TestComponent,
    Mapa1Component,
    Mapa2Component,
    EstablecimientosComponent,
    ArticuloComponent,
    ListadoArticulosComponent,
    ContactoComponent,
    CorreoComponent,
    WhatsappComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CKEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
