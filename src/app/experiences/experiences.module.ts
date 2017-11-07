import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperiencesRoutingModule } from './experiences-routing.module';
import { ExperiencesComponent } from './experiences.component';

@NgModule({
  imports: [
    CommonModule,
    ExperiencesRoutingModule
  ],
  declarations: [ExperiencesComponent]
})
export class ExperiencesModule { }
