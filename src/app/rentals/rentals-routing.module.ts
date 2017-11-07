import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RentalsComponent } from './rentals.component';

const routes: Routes = [
  { path: ':name', component: RentalsComponent },
  { path: ':name/rooms', loadChildren: '../rooms/rooms.module#RoomsModule'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentalsRoutingModule { }
