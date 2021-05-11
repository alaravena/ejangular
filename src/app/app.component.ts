import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestioncv';
  ejemplo = 'Ejemplo de variable';
  unArray = ['uno', 'dos', 'tres', 'cuatro'];

  menu = [
    {
      'nombre': 'inicio', 
      'link': 'inicio.html'
    },{
      'nombre': 'Empresas', 
      'link': 'empresas.html'
    },{
      'nombre': 'Puestos de Trabajo', 
      'link': 'trabajo.html'
    },{
      'nombre': 'Listado CV', 
      'link': 'listadoCV.html'
    },{
      'nombre': 'Perfil', 
      'link': 'perfil.html'
    }
  ]
}
