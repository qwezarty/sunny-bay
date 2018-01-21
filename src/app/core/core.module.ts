import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule } from '@angular/material';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BootComponent } from './boot/boot.component';
import { TemplatesComponent } from './templates/templates.component';
import { TemplateDefaultComponent } from './templates/template-default/template-default.component';
import { TemplateSidenavComponent } from './templates/template-sidenav/template-sidenav.component';
import { TemplateSidenavService } from './templates/template-sidenav/template-sidenav.service';
import { TemplateNoneComponent } from './templates/template-none/template-none.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule
  ],
  declarations: [
    BootComponent,
    HeaderComponent,
    FooterComponent,
    TemplatesComponent,
    TemplateDefaultComponent,
    TemplateSidenavComponent,
    TemplateNoneComponent
  ],
  exports: [
    BootComponent,
    HeaderComponent,
    FooterComponent,
    TemplatesComponent,
  ],
  providers: [BreakpointObserver, MediaMatcher]
})
export class CoreModule { }
