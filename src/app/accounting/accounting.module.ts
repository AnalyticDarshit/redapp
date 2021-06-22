import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { AccountingComponent } from './accounting.component';

const routes: Routes  = [
  {
    path: '',
    component: AccountingComponent,
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
export class AccountingModule { }
