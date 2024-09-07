import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';


@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent implements OnInit {
  public chart: Chart | undefined;
  

  ngOnInit(): void {
    const data = {
      labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
      datasets: [{
        label: 'Informacion',
        data: [0, 66, 100, 54, 23, 123],
        fill: false,
        borderColor: 'rgb(75,192,100)',
        tension: 0.1

      }]

    }
    this.chart = new Chart("chart", {
      type: 'line',
      data: data,
    });
  }
}
