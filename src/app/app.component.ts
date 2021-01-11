import { Component } from '@angular/core';
import { Enlace } from './enlace/enlace.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  
  // enlaces: string[]; // almaceno los enlaces pero como no vamos a usar una DB me voy a crear un arreglo en una clase y la llamo abajo
  enlaces: Enlace[];

  // creamos el constructor de enlaces
  constructor(){
    this.enlaces = [
      new Enlace('Angular', 'https://angular.io', 100),
      new Enlace('Material', 'https://material.io', 50),
      new Enlace('Bootstrap', 'https://getbootstrap.com', 230),
    ];
    console.log(this.enlaces);
  }

  addLink(titulo:HTMLInputElement, enlace:HTMLInputElement) {
    // console.log('Valores: ', titulo.value, enlace.value); // Obteniendo y enviando los valores de los inputs referenciados (#) en el html
    this.enlaces.push(new Enlace(titulo.value, enlace.value));
    // Limpiamos los imputs luego de enviar el enlace, como son valores referenciados podemos hacerlo de la siguiente manera:
    titulo.value = '';
    enlace.value = '';

    return false; // lo usamos para que no refresque la pagina cada vez que apretamos el boton
  
  }
}
