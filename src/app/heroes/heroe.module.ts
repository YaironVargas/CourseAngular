import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";
import { CommonModule } from "@angular/common";



@NgModule({
declarations:[
   HeroeComponent,
   ListadoComponent
],
exports:[
ListadoComponent,
HeroeComponent
],
imports:[                // aqui solo se colocan modulos
   CommonModule          // este modulo tiene todas las directivas de ngIf ngFor
]  
})

export class HeroesModule{}