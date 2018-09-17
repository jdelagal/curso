import {Component, Input} from '@angular/core';

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css']
    
})

export class TiendaComponent {
    public titulo;
    
    public miParque;
    @Input() public nombreDelParque:string ;


    constructor(){
        this.titulo = 'Esta es la tienda';

    }

    mostrarNombre(){
        console.log('Resultado: '+this.nombreDelParque);
    }

    verDatosParque(event){
        console.log("Evento: "+event);
        this.miParque = event;
    }
}
