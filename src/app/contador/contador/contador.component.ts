import {Component} from '@angular/core';

@Component({
selector:'app-contador',
templateUrl:'./contador.component.html',
styleUrls: ['./contador.component.css']
})

export class ContadorComponent{
   cont: number = 0;
   title: string = 'Contador';
   base:number=5;
   acumulador(valor: number) {
    this.cont += valor;
   }
 
}