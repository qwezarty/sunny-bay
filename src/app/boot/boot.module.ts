import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootRoutingModule } from './boot-routing.module';
import { BootComponent } from './boot.component';

@NgModule({
  imports: [
    CommonModule,
    BootRoutingModule
  ],
  declarations: [BootComponent]
})
export class BootModule { }
