import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})

export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro Rochi',
    poder: 10
  }


  //Inyeccion de dependencias
  //Se esta inyectando el servicio en el componente
  constructor( ) {

  }
}
