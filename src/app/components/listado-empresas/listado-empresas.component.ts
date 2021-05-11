import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'listado-empresas',
  templateUrl: './listado-empresas.component.html',
  styleUrls: ['./listado-empresas.component.css']
})
export class ListadoEmpresasComponent implements OnInit {

  empresas : any;

  constructor() { 
    this.empresas = [{
          'nombre': "nestle",
          'puestos': '5',
          'contactoNombre': 'Juan Pérez',
          'contactoEmail': 'algo@yoquese.com'
        },{
          'nombre': "lever",
          'puestos': '3',
          'contactoNombre': 'Juan Pérez2',
          'contactoEmail': 'algo@yoquese.com'
        }
        ,{
          'nombre': "soprole",
          'puestos': '1',
          'contactoNombre': 'Juan Pérez1',
          'contactoEmail': 'algo@yoquese.com'
        }
    ];

  }

  ngOnInit(): void {
  }

}
