import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RoomsRoutingModule } from './rooms-routing.module';
import { MatGridListModule } from '@angular/material';
import { MatTabsModule } from '@angular/material';

import { RoomListComponent } from './room-list/room-list.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    RoomsRoutingModule,
    MatGridListModule,
    MatTabsModule
  ],
  declarations: [RoomListComponent, RoomDetailComponent]
})
export class RoomsModule { }
