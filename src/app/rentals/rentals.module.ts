import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalsRoutingModule } from './rentals-routing.module';

import { RentalsComponent } from './rentals.component';

@NgModule({
  imports: [
    CommonModule,
    RentalsRoutingModule,
  ],
  declarations: [RentalsComponent]
})
export class RentalsModule { }
