import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';



@Component({
  selector: 'app-mapa1',
  templateUrl: './mapa1.component.html',
  styleUrls: ['./mapa1.component.scss']
})
export class Mapa1Component implements OnInit {

  title:string = 'My first AGM project';
  key: string = 'AIzaSyDHV9MfgtjpXg6VmmMXoRZMBOwz4IhBBro';
  lat: number = -34.85411408248613;
  lng: number = -58.522628088357685;

  ngOnInit(): void {
    let html: any = document.getElementById('map');

    let loader = new Loader({
      apiKey: this.key
    })

    loader.load().then(() => {
      new google.maps.Map(html, {
        center: {lat: this.lat, lng: this.lng},
        zoom: 17,
        styles: []
      })
    })
  }

}

