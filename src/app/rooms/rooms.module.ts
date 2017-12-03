import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { RoomsRoutingModule } from './rooms-routing.module';
import {
        MatIconModule,
        MatButtonModule,
        MatTabsModule,
        MatSidenavModule,
        MatCardModule,
        MatListModule,
        MatSlideToggleModule,
      } from '@angular/material';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    LayoutModule,
    RoomsRoutingModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatSlideToggleModule,
  ],
  declarations: [
    RoomListComponent,
    RoomDetailComponent,
  ],
})
export class RoomsModule { }
