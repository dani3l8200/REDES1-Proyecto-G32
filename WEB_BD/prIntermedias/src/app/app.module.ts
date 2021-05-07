import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { ProductoComponent } from './component/producto/producto.component';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { VendedorComponent } from './component/vendedor/vendedor.component';
import { NavPrincipalComponent } from './component/nav-principal/nav-principal.component';
import { VentaComponent } from './component/venta/venta.component';
import { ListadoComponent } from './component/listado/listado.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavBarComponent,
    ProductoComponent,
    VendedorComponent,
    NavPrincipalComponent,
    VentaComponent,
    ListadoComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModulesPro.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
