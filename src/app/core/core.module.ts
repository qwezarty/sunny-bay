import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatButtonModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BootComponent } from './boot/boot.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  declarations: [BootComponent, HeaderComponent, FooterComponent],
  exports: [
    BootComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
