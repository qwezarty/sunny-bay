import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileRoutingModule } from './account-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import {
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatToolbarModule
} from '@angular/material';

import { AccountComponent } from './account.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MediaMatcher } from '@angular/cdk/layout';
import { ProfileComponent, ProfileDialogComponent } from './profile/profile.component';
import { OrdersComponent, OrdersDialogComponent } from './orders/orders.component';
import { OccupanciesComponent, OccupanciesDialogComponent } from './occupancies/occupancies.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
  ],
  declarations: [
    AccountComponent,
    ProfileComponent,
    ProfileDialogComponent,
    OrdersComponent,
    OrdersDialogComponent,
    OccupanciesComponent,
    OccupanciesDialogComponent,
  ],
  entryComponents: [ProfileDialogComponent, OccupanciesDialogComponent, OrdersDialogComponent],
  providers: [BreakpointObserver, MediaMatcher]
})
export class AccountModule { }
