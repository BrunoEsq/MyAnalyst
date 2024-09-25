import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CookieService } from '../cookie.service';
import { Router } from '@angular/router';
import { delay } from 'rxjs';

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
  color: string = "";
  chart: string ="";

  achart: string = "";
  aname: string = "";
  alabels: string = "";
  adata: string = "";
  acolor: string = "";
  constructor(private cookieService: CookieService, private router: Router) { }

  onSubmit() {
    console.log("Completed")
  }
  fChart(){
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

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  redirect() {
    this.cookieService.setCookie("name", this.name, 365);
    this.cookieService.setCookie("labels", this.labels, 365);
    this.cookieService.setCookie("data", this.data, 365);
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
