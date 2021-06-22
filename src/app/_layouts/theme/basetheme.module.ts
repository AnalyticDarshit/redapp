import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseComponent } from './base.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BaseComponent, SidebarComponent, TopbarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [BaseComponent, SidebarComponent, TopbarComponent, FooterComponent]
})
export class BaseTheme { }
