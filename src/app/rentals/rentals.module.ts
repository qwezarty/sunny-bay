import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalsRoutingModule } from './rentals-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatIconModule,
  MatGridListModule,
} from '@angular/material';

import { RentalsComponent } from './rentals.component';
import { ThemeService } from '../shared/theme/theme.service';
import { StylesheetService } from '../shared/stylesheet/stylesheet';
import { SharedModule } from '../shared/shared.module';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MediaMatcher } from '@angular/cdk/layout';

@NgModule({
  imports: [
    CommonModule,
    RentalsRoutingModule,
    FlexLayoutModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
  ],
  declarations: [RentalsComponent],
  providers: [StylesheetService, ThemeService, BreakpointObserver, MediaMatcher],
})
export class RentalsModule { }
