import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsRoutingModule } from './rooms-routing.module';

import { RoomListComponent } from './room-list/room-list.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RoomsRoutingModule
  ],
  declarations: [RoomListComponent, RoomDetailComponent]
})
export class RoomsModule { }
