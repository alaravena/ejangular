import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'listado-empresas',
  templateUrl: './listado-empresas.component.html',
  styleUrls: ['./listado-empresas.component.css']
})
export class ListadoEmpresasComponent implements OnInit {

  empresas : any;

  model: NgbDateStruct;
  date: {year: number, month: number};

  constructor(
    private calendar: NgbCalendar
  ) 
  { 
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

  selectToday() {
    this.model = this.calendar.getToday();
  }

}
