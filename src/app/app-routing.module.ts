import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './_layouts/theme/base.component';
const routes: Routes = [
  { 
    path: '', 
    redirectTo:'/dashboard' , 
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: BaseComponent,
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'accounting',
    component: BaseComponent,
    loadChildren: () => import('./accounting/accounting.module').then(m => m.AccountingModule)
  },
  {
    path: 'article',
    component: BaseComponent,
    loadChildren: () => import('./article/article.module').then(m => m.ArticleModule)
  },
  {
    path: 'ledger',
    component: BaseComponent,
    loadChildren: () => import('./ledger/ledger.module').then(m => m.LedgerModule)
  },
  {
    path: 'organization',
    component: BaseComponent,
    loadChildren: () => import('./organization/organization.module').then(m => m.OrganizationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
