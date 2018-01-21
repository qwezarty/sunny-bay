import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomListComponent } from './room-list/room-list.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';

const routes: Routes = [
  { path: '', component: RoomListComponent, data: { 'template': 'rooms' } },
  { path: ':id', component: RoomDetailComponent, data: { 'template': 'room' } },
  { path: ':id/reservation', loadChildren: '../reservation/reservation.module#ReservationModule' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule { }
