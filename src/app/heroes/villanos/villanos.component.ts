import { Component, VERSION} from '@angular/core';


@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: ['./villanos.component.css']
})
export class VillanosComponent {
  

  villanos: string[] = ['THANOS','DR. OCTOPUS','VENOM','LOKI','FREEZER'];
  indice:number = 0;
  removeItem(i: number){

    this.indice=this.indice+i;
    
  }
  name = 'Angular' + VERSION.major;

  title: String = "Aumento de poder de villano";
  numero: number = 1 ;
  base: number = 20 ;
  acumular(valor : number){
    this.numero += valor;
  }


  }


