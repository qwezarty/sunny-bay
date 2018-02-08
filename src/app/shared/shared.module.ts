import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylesheetService } from './stylesheet/stylesheet';
import { ThemeService } from './theme/theme.service';
import { ElementSrcDirective } from './element-src/element-src.directive';
import { MatVideoDialogComponent } from './mat-video-dialog/mat-video-dialog.component';
import { MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BackgroundSrcDirective } from './background-src/background-src.directive';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    FlexLayoutModule,
  ],
  declarations: [ElementSrcDirective, BackgroundSrcDirective, MatVideoDialogComponent],
  providers: [StylesheetService],
  entryComponents: [MatVideoDialogComponent],
  exports: [ElementSrcDirective, BackgroundSrcDirective, MatVideoDialogComponent]
})
export class SharedModule { }
