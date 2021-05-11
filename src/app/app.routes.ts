import { RouterModule } from '@angular/router';
import { ListadoEmpresasComponent } from './components/listado-empresas/listado-empresas.component';

const appRoutes = [
    { path: 'listado-empresas', component: ListadoEmpresasComponent,  pathMatch: 'full'}
  ];

  export const routing = RouterModule.forRoot(appRoutes);