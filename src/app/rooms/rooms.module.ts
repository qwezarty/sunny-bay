import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';

@NgModule({
  imports: [
    CommonModule,
    RoomsRoutingModule
  ],
  declarations: [RoomsComponent]
})
export class RoomsModule { }
