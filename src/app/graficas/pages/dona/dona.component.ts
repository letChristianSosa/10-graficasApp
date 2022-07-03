import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent {
  public doughnutChartLabels: string[] = [
    'Resenas Positivas',
    'Resenas Negativas',
    'Neutro',
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [180, 30, 50],
        backgroundColor: ['#ADF001', 'red', 'gray'],
        hoverBackgroundColor: ['yellow'],
        hoverBorderColor: ['yellow'],
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
}
