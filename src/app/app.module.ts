import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { ListadoEmpresasComponent } from './components/listado-empresas/listado-empresas.component';
import { MenuNavComponent } from './components/menu-nav/menu-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ListadoEmpresasComponent,
    MenuNavComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
