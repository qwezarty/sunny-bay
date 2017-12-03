import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylesheetService } from './stylesheet/stylesheet';
import { ThemeService } from './theme/theme.service';
import { ElementSrcDirective } from './element-src/element-src.directive';
import { MatVideoDialogComponent } from './mat-video-dialog/mat-video-dialog.component';
import { MatDialogModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    FlexLayoutModule,
  ],
  declarations: [ElementSrcDirective, MatVideoDialogComponent],
  providers: [StylesheetService],
  entryComponents: [MatVideoDialogComponent],
  exports: [ElementSrcDirective, MatVideoDialogComponent]
})
export class SharedModule { }
