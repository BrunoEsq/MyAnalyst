import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CookieService } from '../cookie.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { Chart } from 'chart.js/auto';



@Component({
  selector: 'app-create-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-form.component.html',
  styleUrl: './create-form.component.css'
})

export class CreateFormComponent {


  name: string = "";
  labels: string = "";
  data: string = "";
  data2: string = "";
  color: string = "";
  chart: string = "";

  achart: string = "";
  aname: string = "";
  alabels: string = "";
  adata: string = "";
  adata2: string = "";
  acolor: string = "";

  name2: string = "";
  labels2: string[] = [];
  data_2: number[] = [];
  data2_2: number[] = [];
  color2: string = "";
  chart2: Chart | null = null;


  labels_array: string[] = [];
  data_array: number[] = [];
  data_array2: number[] = [];
  chart3: Chart | null = null;
  chartInstance: Chart | null = null;

  constructor(private cookieService: CookieService, private router: Router) { }



  onSubmit() {
    console.log("Completed")
  }
  fChart() {
    this.achart = "1";
  }
  fName() {
    this.aname = "1";
  }

  fLabels() {
    this.alabels = "1";
  }


  fData() {
    this.adata = "1";
  }

  fData2() {
    this.adata2 = "1";
  }

  updateChart() {
    const ctx = document.getElementById("chart2") as HTMLCanvasElement;

    if (this.chartInstance) {
      this.chartInstance.destroy();
    }
    if (this.color == "1") {
      this.acolor = "green";
    } else if (this.color == "2") {
      this.acolor = "red";
    } else {
      this.acolor = "blue";
    }


    const labelsArray = this.labels.split(",").map(label => label.trim());
    const dataArray = this.data.split(",").map(value => parseInt(value.trim(), 10));
    const dataArray2 = this.data2.split(",").map(value => parseInt(value.trim(), 10));

    if (this.chart == "1") {
      const chartData = {
        labels: labelsArray,
        datasets: [{
          label: this.name,
          data: dataArray,
          fill: false,
          borderColor: "gray",
          backgroundColor: this.acolor.toLowerCase(),
          tension: 0.1
        }]
      };

      this.chartInstance = new Chart(ctx, {
        type: 'line',
        data: chartData,
      });
    } else if (this.chart == "2") {
      const chartData = {
        labels: labelsArray,
        datasets: [
          {
            label: 'Fully Rounded',
            data: dataArray,
            borderColor: this.color,
            backgroundColor: this.acolor.toLowerCase(),
            borderWidth: 2,
            borderRadius: Number.MAX_VALUE,
            borderSkipped: false,
          },
          {
            label: 'Small Radius',
            data: dataArray2,
            borderColor: this.color,
            backgroundColor: "yellow",
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          }
        ]
      };

      this.chartInstance = new Chart(ctx, {
        type: 'bar',
        data: chartData,
      });
    } else if (this.chart == "3") {
      const chartData = {
        labels: labelsArray,
        datasets: [{
          label: this.name,
          data: dataArray,
          fill: true,
          borderColor: "gray",
          backgroundColor: this.acolor.toLowerCase(),
          tension: 0.1
        }]
      };

      this.chartInstance = new Chart(ctx, {
        type: 'line',
        data: chartData,
      });
    }
  }




  onFormChange() {
    this.updateChart();
  }



  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  redirect() {
    this.cookieService.setCookie("name", this.name, 365);
    this.cookieService.setCookie("labels", this.labels, 365);
    this.cookieService.setCookie("data", this.data, 365);
    this.cookieService.setCookie("data2", this.data2, 365);
    this.cookieService.setCookie("color", this.color, 365);
    this.cookieService.setCookie("chart", this.chart, 365);

    this.acolor = "1";

    (async () => {

      console.log('before delay');
      await this.delay(1900);

      this.router.navigate(['charts']);
      console.log('after delay');
    })();
  }

  lineChart(){
    console.log(this.achart)
    this.chart = '1';
    this.achart = '1';
    console.log(this.achart)
  }

  

  areaChart(){
    this.chart = '2';
    this.achart = '3';
  }

  barChart(){
    this.achart = '2';
    this.chart = '3';
  }
}
