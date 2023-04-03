import { Component } from '@angular/core';

@Component({
   selector: 'app-heroe',
   templateUrl: './heroe.component.html',
   styleUrls: ['./heroe.component.css']
})

export class HeroeComponent {
   nombre: string = "Ironman";
   edad: number = 32;
   obtenerNombre(): string {
      return `The name is ${this.nombre} and is ${this.edad} years old`
   }

   get capitalizarName(): string {
      return this.nombre.toUpperCase();
   }

   cambiarNombre():void{
      this.nombre='Spiderman'
   }
   cambiarEdad():void{
      this.edad=20;
   }
}