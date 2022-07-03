import { Component } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-graficas-dobles',
  templateUrl: './graficas-dobles.component.html',
  styles: [],
})
export class GraficasDoblesComponent {
  proveedoresData: ChartData<'bar'> = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      { data: [100, 200, 300, 400, 500], label: 'Vendedor A' },
      { data: [50, 250, 30, 450, 200], label: 'Vendedor B' },
    ],
  };

  // proveedoresLabels: string[] = ['2021', '2022', '2023', '2024', '2025'];

  // productoData: ChartDataSets[] = [
  //   {
  //     data: [200, 300, 400, 300, 100],
  //     label: 'Carros',
  //     backgroundColor: 'blue',
  //   },
  // ];

  productosData: ChartData<'bar'> = {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        data: [200, 300, 400, 300, 100],
        label: 'Carros',
        backgroundColor: 'blue',
      },
    ],
  };
}
