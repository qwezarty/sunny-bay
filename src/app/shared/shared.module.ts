import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StylesheetService } from './stylesheet/stylesheet';
import { ThemeService } from './theme/theme.service';


@NgModule({
  imports: [
    CommonModule
  ],
  providers: [StylesheetService]
})
export class SharedModule { }
