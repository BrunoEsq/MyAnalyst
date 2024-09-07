import { Routes } from '@angular/router';
import { CreateFormComponent } from './create-form/create-form.component';
import { ChartsComponent } from './charts/charts.component';
import { LineChartComponent } from './line-chart/line-chart.component';

export const routes: Routes = [
    { path: 'charts', component: CreateFormComponent },
    { path: '', component: LineChartComponent },

];
