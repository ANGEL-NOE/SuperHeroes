import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['HULK','SAITAMA','SUPERMAN','THOR','GOKU'];
  eliminar: string[]  = [];
  indice:number = 0;
  removeItem(i: number){

    this.indice=this.indice+i;
    this.eliminar = this.heroes.splice(i,1);

  }

}
