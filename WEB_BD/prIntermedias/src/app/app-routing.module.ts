import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './component/inicio/inicio.component';
import { ListadoComponent } from './component/listado/listado.component';
import { NavBarComponent} from './component/nav-bar/nav-bar.component';
import { ProductoComponent} from './component/producto/producto.component';
import { VendedorComponent} from './component/vendedor/vendedor.component';
import { VentaComponent } from './component/venta/venta.component';

const routes: Routes = [
  {path: "",component:InicioComponent},
  {path:"navbar",component:NavBarComponent},
  {path:"productos", component:ProductoComponent},
  {path: 'vendedor',component:VendedorComponent},
  {path:'venta',component:VentaComponent},
  {path:'listado',component:ListadoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
