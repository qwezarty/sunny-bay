import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalsRoutingModule } from './rentals-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';

import { RentalsComponent } from './rentals.component';
import { ThemeService } from '../shared/theme/theme.service';
import { StylesheetService } from '../shared/stylesheet/stylesheet';

@NgModule({
  imports: [
    CommonModule,
    RentalsRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [RentalsComponent],
  providers: [StylesheetService, ThemeService],
})
export class RentalsModule { }
