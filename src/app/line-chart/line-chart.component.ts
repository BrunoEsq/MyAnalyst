import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { CookieService } from '../cookie.service';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [],
  templateUrl: './line-chart.component.html',
  styleUrl: './line-chart.component.css'
})
export class LineChartComponent implements OnInit {
  public chart: Chart | undefined;
  
  constructor(private cookieService: CookieService) {}

  name: string = "";
  labels: string = "";
  data: string = "";
  color: string = "";
  labels_array: string[] = [];
  data_array: number[] = [];

  ngOnInit(): void {

    this.name = this.cookieService.getCookie("name");
    this.labels = this.cookieService.getCookie("labels");
    this.data = this.cookieService.getCookie("data");
    this.color = this.cookieService.getCookie("color");
    
    if (this.color == "1") {
      this.color = "green";
    }else if(this.color == "2"){
      this.color = "red";
    }else if(this.color == "3"){
      this.color = "blue";
    }
    this.labels_array = this.labels.split(",").map(label => label.trim());
    this.data_array = this.data.split(",").map(value => parseInt(value.trim(), 10));
    const data = {
      labels: this.labels_array,
      datasets: [{
        label: this.name,
        data: this.data_array,
        fill: false,
        borderColor: this.color.toLowerCase(),
        tension: 0.1

      }]

    }
    this.chart = new Chart("chart", {
      type: 'line',
      data: data,
    });
  }
}
