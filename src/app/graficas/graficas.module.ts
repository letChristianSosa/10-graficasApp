import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { GraficasRoutingModule } from './graficas-routing.module';

import { BarrasComponent } from './pages/barras/barras.component';
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { GraficasDoblesComponent } from './pages/graficas-dobles/graficas-dobles.component';

@NgModule({
  declarations: [
    BarrasComponent,
    GraficasDoblesComponent,
    DonaComponent,
    DonaHttpComponent,
    GraficaBarraComponent,
  ],
  imports: [CommonModule, GraficasRoutingModule, NgChartsModule],
})
export class GraficasModule {}
