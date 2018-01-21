import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { Globals } from '../global';
import { TemplateService } from './template.service';
import { TemplateSidenavService } from './core/templates/template-sidenav/template-sidenav.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [
    Globals,
    TemplateService,
    TemplateSidenavService,
    { provide: LOCALE_ID, useValue: 'zh-Hans' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
