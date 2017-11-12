import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalsRoutingModule } from './rentals-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RentalsComponent } from './rentals.component';

@NgModule({
  imports: [
    CommonModule,
    RentalsRoutingModule,
    FlexLayoutModule
  ],
  declarations: [RentalsComponent]
})
export class RentalsModule { }
