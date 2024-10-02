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
  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit() {
    this.fColor();
    this.labels2 = this.labels.split(",").map(label => label.trim());
    this.data_2 = this.data.split(",").map(value => parseInt(value.trim(), 10));
    this.data2_2 = this.data2.split(",").map(value => parseInt(value.trim(), 10));

    let datas;
    console.log(this.chart);
    if (this.chart == "1") {
      datas = {
        labels: this.labels2,
        datasets: [{
          label: this.name2,
          data: this.data_2,
          fill: false,
          borderColor: this.color2.toLowerCase(),
          tension: 0.1

        }]

      }
      this.chart2 = new Chart("chart", {
        type: 'line',
        data: datas,
      });

    } else {

    }
  }

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

  fColor() {
    const ctx = document.getElementById("chart") as HTMLCanvasElement;
    console.log(ctx)
    this.labels_array = this.labels.split(",").map(label => label.trim());
    this.data_array = this.data.split(",").map(value => parseInt(value.trim(), 10));
    this.data_array2 = this.data2.split(",").map(value => parseInt(value.trim(), 10));
    console.log("1. " + this.labels_array);
    console.log("2. " + this.data_array);
    console.log("3. " + this.data_array2);

    let datas;

    datas = {
      labels: this.labels_array,
      datasets: [{
        label: this.name,
        data: this.data_array,
        fill: true,
        borderColor: this.color.toLowerCase(),
        backgroundColor: this.color.toLowerCase(),
        tension: 0.1
      }]
    };

    this.chart3 = new Chart(ctx, {
      type: 'line',
      data: datas,
    });
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
}
