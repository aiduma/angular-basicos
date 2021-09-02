import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})

export class PersonajesComponent {
  //Decorador @Input - Es una manera de obtener el arreglo de Personajes
  //@Input() data: Personaje[] = [];

  get data() {// pudo haber sido personajes en lugar de data
    return this.dbzService.pesonajes;
  }

  constructor(private dbzService: DbzService) {
  }
}
