import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileRoutingModule } from './account-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import {
  MatSidenavModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
} from '@angular/material';

import { AccountComponent } from './account.component';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MediaMatcher } from '@angular/cdk/layout';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { OccupanciesComponent } from './occupancies/occupancies.component';
import { TemplateSidenavService } from '../core/templates/template-sidenav/template-sidenav.service';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    SharedModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
  ],
  declarations: [
    AccountComponent,
    ProfileComponent,
    OccupanciesComponent,
    OrdersComponent
  ],
  providers: [BreakpointObserver, MediaMatcher]
})
export class AccountModule { }
