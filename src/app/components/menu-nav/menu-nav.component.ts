import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {

  active = 0;
  contenidos: any;

  constructor() { 
    console.log("Componenete menu-nav cargado")

    this.contenidos = [
      {
        'item': 1,
        'titulo': 'Primera parte',
        'contenido': 'lorem impsum 1'
      },{
        'item': 2,
        'titulo': 'Segunda parte',
        'contenido': 'lorem impsum 2'
      },{
        'item': 3,
        'titulo': 'Tercera parte',
        'contenido': 'lorem impsum 3'
      },{
        'item': 4,
        'titulo': 'Cuarta parte',
        'contenido': 'lorem impsum 4'
      }
    ]
  }

  ngOnInit(): void {
    console.log("Componente menu-nav inicalizado")
  }

}
