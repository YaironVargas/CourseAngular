import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
heroeBorrado: string='';
arrayBorrados:string[]=[];

  listado_heroes: string[]=['Hulk','Spiderman','Ironman','Acuaman','Thor','Capitan America'];

  borrarHeroe(){
    console.log('borrando...');
    this.heroeBorrado = this.listado_heroes.pop()||'';
    this.arrayBorrados.unshift(this.heroeBorrado)||'';
    console.log(this.heroeBorrado)
  }
}
