import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CookieService } from '../cookie.service';

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
  constructor(private cookieService: CookieService) {}

  onSubmit() {
    this.cookieService.setCookie("name", this.name, 365);
    this.cookieService.setCookie("labels", this.labels, 365);
    this.cookieService.setCookie("data", this.data, 365);
    this.cookieService.setCookie("color", this.color, 365);
  }
}
