import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { MatButtonModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';

import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTabsModule,
    MatButtonModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
