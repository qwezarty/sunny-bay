import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalsRoutingModule } from './rentals-routing.module';
import { MatButtonModule } from '@angular/material';

import { RentalsComponent } from './rentals.component';

@NgModule({
  imports: [
    CommonModule,
    RentalsRoutingModule,
    MatButtonModule
  ],
  declarations: [RentalsComponent]
})
export class RentalsModule { }
