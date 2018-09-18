import {Component, Input, OnInit} from '@angular/core';
declare var JQuery:any;
declare var $:any;

@Component({
    selector: 'tienda',
    templateUrl: './tienda.component.html',
    styleUrls: ['./tienda.component.css']
    
})

export class TiendaComponent implements OnInit{
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
    ngOnInit(){
        $('#textojq').hide();
        $('#botonjq').click(function(){
            $('#textojq').slideToggle();
           // $('#textojq').removeClass('hidden').slideToggle();
        });
    }
}
