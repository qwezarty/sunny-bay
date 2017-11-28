import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylesheetService } from './stylesheet/stylesheet';
import { ThemeService } from './theme/theme.service';
import { ElementSrcDirective } from './element-src/element-src.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ElementSrcDirective],
  providers: [StylesheetService],
  exports: [ElementSrcDirective]
})
export class SharedModule { }
