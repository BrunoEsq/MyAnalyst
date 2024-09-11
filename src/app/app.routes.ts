import { Routes } from '@angular/router';
import { CreateFormComponent } from './create-form/create-form.component';
import { ChartsComponent } from './charts/charts.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    { path: 'create', component: CreateFormComponent },
    { path: '', component: HomepageComponent },
    { path: 'charts', component: LineChartComponent },

];
