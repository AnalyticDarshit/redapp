import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { DashboardComponent } from './dashboard.component';

const routes: Routes  = [
  {
    path: '',
    component: DashboardComponent,
  },
  
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
  ]
})
export class DashboardModule { }
