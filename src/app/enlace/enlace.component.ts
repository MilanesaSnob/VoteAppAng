import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Enlace } from './enlace.model';

@Component({
  selector: 'app-enlace',
  templateUrl: './enlace.component.html',
  styleUrls: ['./enlace.component.css']
})
export class EnlaceComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row bg-dark'; // Con este decorador podemos asignar clases enteras de botstrap al componente
  @Input() enlace: Enlace;

  constructor() {
    
   }

  ngOnInit(): void {
    console.log(this.enlace);
  }

}
